// Import the library
import { createClient } from '@supabase/supabase-js';


// Create a client
const supabaseUrl = process.env.VUE_APP_SUPABASE_URL;
const supabaseKey = process.env.VUE_APP_SUPABASE_KEY;

export const supabaseClient = createClient(supabaseUrl, supabaseKey);
