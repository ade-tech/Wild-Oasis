import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://lxpdxiknfwrjjpufgohp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4cGR4aWtuZndyampwdWZnb2hwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczNjUxMDYsImV4cCI6MjA1Mjk0MTEwNn0.oLDHDSS8s1inxOPrnF3W245VeHBlGU4-Uhovhd1QSxk";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
