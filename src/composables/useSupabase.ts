import { createClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

export const useSupabase = async (table: string) => {
  const supabase = createClient(supabaseUrl, supabaseAnonKey)
  const { data, error } = await supabase.from(table).select()

  return {
    data,
    error,
  }
}
