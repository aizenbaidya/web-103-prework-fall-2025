import { createClient } from "@supabase/supabase-js"

const URL = "https://xyceujjzyhijmrkzlbsm.supabase.co"
// https://vite.dev/guide/env-and-mode#env-variables
const API_KEY = import.meta.env.VITE_SUPABASE_KEY

export const supabase = createClient(URL, API_KEY);
