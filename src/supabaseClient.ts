import { createClient } from '@supabase/supabase-js';
// import dotenv from 'dotenv';
// dotenv.config();

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('must be provided in .env file');
}
  
export const supabase = createClient(supabaseUrl, supabaseAnonKey);