import express from 'express';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

const app = express();
const PORT = 8080;
app.use('/', (req, res) => {
  console.log(req, res);
  console.log('HIT!');
});
app.listen(PORT, () => `Server listening on http://localhost:${PORT}`);
