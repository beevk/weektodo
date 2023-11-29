import { createClient } from '@supabase/supabase-js';


const supabaseUrl = process.env.VUE_APP_SUPABASE_URL;
const supabaseKey = process.env.VUE_APP_SUPABASE_KEY;

let supabaseClient;

try {
    supabaseClient = createClient(supabaseUrl, supabaseKey);
} catch (e) {
   console.log("Error creating Supabase client:", e);
}

export default supabaseClient;
