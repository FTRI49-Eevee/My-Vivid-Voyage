import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '../src/App';
import '../src/index.css';
// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// export const supabase = createClient(supabaseUrl, supabaseAnonKey);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
