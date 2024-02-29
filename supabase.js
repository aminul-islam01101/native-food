import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://zbrrqemwrsbrzpgqlaea.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpicnJxZW13cnNicnpwZ3FsYWVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxODgyOTksImV4cCI6MjAyNDc2NDI5OX0.qJeA-CiQEG9JdiT_5c4hcgIx9LkUFDHjMAHgSs_augc"


export const supabase = createClient(supabaseUrl,supabaseAnonKey)

//

//