import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://zdfcozojkmfscbcxmzdl.supabase.co'

const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkZmNvem9qa21mc2NiY3htemRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg0Nzc4MTQsImV4cCI6MjA3NDA1MzgxNH0.WzwF8trGjiI7f80-Fwr87bSXfsyMMkBy0G1CnI9eo2c" 
const  supabase = createClient(supabaseUrl, supabaseKey)

export default supabase




