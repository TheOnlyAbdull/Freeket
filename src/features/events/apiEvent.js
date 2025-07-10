import supabase from "../../services/supabase";

export async function getEvents() {
  let { data, error } = await supabase.from("Events").select("*"); // Fetch all columns

  if (error) {
    console.error(error.message);
    throw new Error("Event could not be fetched");
  }

  return data;
}

export async function createEvents(newEvent) {
  const { data, error } = await supabase
    .from("Events")
    .insert([newEvent])
    .select();

  if (error) {
    console.error(error.message);
    throw new Error("Event could not be fetched");
  }

  return data;
}
