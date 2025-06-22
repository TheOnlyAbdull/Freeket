import supabase from "./supabase";

export default async function getEvents() {
    let { data, error } = await supabase
        .from('Events')
        .select('*'); // Fetch all columns

    if (error) {
        console.error("Error fetching events:", error);
    } else {
        console.log("Fetched events:", data);
    }

    return data || []; // Return an empty array if no data is found
}