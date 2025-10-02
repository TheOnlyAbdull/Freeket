import emailjs from "@emailjs/browser";
import supabase from "../../services/supabase";
import { generateTicketNumber } from "../../utlis/helper";

export async function registerAttendee(data) {
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    eventId,
    eventName,
    eventDate,
    eventTime,
    eventVenue,
  } = data;
  let attendeeId;
  //1.check if attendee already exists and registered for the event
  //PROFILE CREATION LOGIC
  //a. check if profile exists with email
  const { data: existingProfile, error: checkError } = await supabase
    .from("profile")
    .select("id, email, displayName")
    .eq("email", email)
    .single();

  //   b. if email/profile exists, return the profile
  if (existingProfile) {
    console.log("Found existing profile for email:", email);
    attendeeId = existingProfile.id;
    // return existingProfile;
  }

  if (checkError && checkError.code !== "PGRST116") {
    console.error("Error checking profile:", checkError);
    throw new Error("Error checking profile"); // Handle unexpected errors
  }

  //c. if email/profile does not exist, create a new profile
  if (checkError && checkError.code === "PGRST116") {
    console.log("no profile found, creating new profile");
    const { data: newProfile, error: insertError } = await supabase
      .from("profile")
      .insert([
        {
          email: email,
          displayName: firstName + " " + lastName,
          phoneNumber: phoneNumber,
          isOrganizer: false,
        },
      ])
      .select()
      .single();

    if (insertError) {
      console.error("Error creating profile:", insertError);
      throw new Error("Error creating profile");
    }
    // Use the ID of the newly created profile.
    attendeeId = newProfile.id;

    // return newProfile;
  }

  //REGISTRATION LOGIC
  //1. check if attendee is already registered for the event with email and eventId
  const { count, error: countError } = await supabase
    .from("registrations")
    .select("*", { count: "exact", head: true })
    .eq("attendeeId", attendeeId)
    .eq("eventId", eventId);

  // if an error occurs while checking registration
  if (countError) {
    console.error("Error checking for existing registration:", countError);
    throw new Error("Failed to check for existing registration.");
  }

  //3. if already registered, return an error message
  if (count > 0) {
    // If count is greater than 0, a registration already exists.
    console.log("Attendee already registered for this event.");
    throw new Error("You are already registered for this event.");
  }

  //2. if not registered, create a new registration
  //newTicket No
  const newTicketNumber = generateTicketNumber(eventName, 4);
  const { data: newRegistration, error: registrationError } = await supabase
    .from("registrations")
    .insert([
      {
        attendeeId: attendeeId,
        eventId: eventId,
        ticketNumber: newTicketNumber, //to check in
        // ticket_id: ticket.id,
        // qr_code_value: `${attendeeId}-${eventId}-${Date.now()}`,
        status: "confirmed", // confirmed, cancelled, checked
      },
    ])
    .select("*")
    .single(); // Return the full registration object

  if (registrationError) {
    console.error("Error creating new registration:", registrationError);
    throw new Error("Failed to complete registration. Please try again.");
  }

  //send confirmation email to the attendee with ticket details
  const YOUR_SERVICE_ID = "service_bhzklxl";
  const YOUR_TEMPLATE_ID = "template_tco85uj";
  const YOUR_PUBLIC_KEY = "p3qudSD0wsDit9cw2";

  const templateParams = {
    to_name: firstName,
    email: email,
    to_ticketNumber: newTicketNumber,
    to_eventName: eventName,
    to_eventDate: eventDate,
    to_eventTime: eventTime,
    to_eventVenue: eventVenue,
  };

  //using email.js
  sendConfirmationEmail(YOUR_PUBLIC_KEY, YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams);

  return newRegistration;
}



function sendConfirmationEmail(YOUR_PUBLIC_KEY, YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams) {
  emailjs
    .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, YOUR_PUBLIC_KEY)
    .then(
      () => {
      console.log("SUCCESS!");
    },
    (error) => {
      console.log("FAILED...", error.text);
    }
  );
}
