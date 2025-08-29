import supabase from "../../services/supabase";

async function getEventAnalytics({ eventId }) {

  //TODO
  //1. get the registration profile with the eventID
  const { data, error } = await supabase
    .from("registrations")
    .select(`
      *,
      profile:attendeeId (
        id,
        displayName,
        email,
        phoneNumber
      )
    `)
    .eq("eventId", eventId);

    

  if (error) {
    console.error("Error fetching registrations:", error);
    throw new Error("Could not fetch registrations");
  }
  return data;
}
export default getEventAnalytics;
