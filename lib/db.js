// Sdílený Supabase klient (service role — jen na serveru!).
const { createClient } = require("@supabase/supabase-js");

let _client = null;
function supabase() {
  if (!_client) {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_KEY;
    if (!url || !key) throw new Error("Chybí SUPABASE_URL nebo SUPABASE_SERVICE_KEY.");
    _client = createClient(url, key, { auth: { persistSession: false } });
  }
  return _client;
}

module.exports = { supabase };
