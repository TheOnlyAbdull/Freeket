import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ylurzltcsbthbggluxeg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsdXJ6bHRjc2J0aGJnZ2x1eGVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyNzI0MTEsImV4cCI6MjA2NTg0ODQxMX0.EohDndRL4lKAN2yS_LFAxxTmb4Mq12P8FwMFJHkxDWo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
