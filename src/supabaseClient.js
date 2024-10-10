import { createClient } from '@supabase/supabase-js'

console.log('supabaseClient: Setting up Supabase client');

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('supabaseClient: Missing Supabase URL or Anon Key');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

console.log('supabaseClient: Supabase client created');