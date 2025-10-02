import supabase from "../../services/supabase";

export async function checkInAttendee({ ticketId, eventId }) {

    console.log("API called with ticketId:", ticketId, "and eventId:", eventId);
  // Validate ticket ID and update status
  const { data, error } = await supabase
    .from("registrations")
    .update({ status: "checked" })
    .eq("ticketNumber", ticketId)
    .eq("eventId", eventId)
    .select()
    .single();

  if (error) {
    console.error("Error checking in attendee:", error);
    throw new Error(error.message);
  }

  if (!data) {
    console.error("Invalid Ticket ID or Event ID.");
    throw new Error("Invalid Ticket ID or Event ID.");
  }

  console.log(data);
  return data;
}