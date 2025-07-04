import supabase from "../../services/supabase";

export default async function getEvents() {
  let { data, error } = await supabase.from("Events").select("*"); // Fetch all columns

  if (error) {
    console.error(error.message);
    throw new Error("Event could not be fetched");
  }

  return data;
}
