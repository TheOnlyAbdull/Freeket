import supabase, { supabaseUrl } from "../../services/supabase";

export async function getEvents() {
  let { data, error } = await supabase.from("Events").select("*"); // Fetch all columns

  if (error) {
    console.error(error.message);
    throw new Error("Event could not be fetched");
  }

  return data;
}

export async function createEvents(newEvent) {
  const imageName = `${Math.random()}-${newEvent.eventImage.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/event-fliers//${imageName}`;
  const modifiedEventName = newEvent.eventName.replaceAll(" ", "-");

  //1 Create a new event
  const { data, error } = await supabase
    .from("Events")
    .insert([{ ...newEvent, eventImage: imagePath, eventName: modifiedEventName }])
    .select();

  if (error) {
    console.error(error.message);
    throw new Error("Event could not be fetched");
  }
  //2 Upload the event image to storage
  const { error: storageError } = await supabase.storage
    .from("event-fliers")
    .upload(imageName, newEvent.eventImage);
     
  //3. Delete the image from storage if there was an error
  if (storageError) {
    await supabase.from("Events").delete().eq("id", data.id);
    throw new Error("Event image could not be uploaded");
  }

  return data;
}
