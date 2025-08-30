import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://isjfthmxuuicdpiorudb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzamZ0aG14dXVpY2RwaW9ydWRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwMDU1ODIsImV4cCI6MjA3MDU4MTU4Mn0.pziiNRF_eQn52dl-X47CKo6bcI_tZvHPX-xUb-F06_c";
// const supabaseKey = process.env.SUPABASE_KEY

const database = () => {
  const supabase = createClient(supabaseUrl, supabaseKey);
  return supabase;
};

export default database;
