import { createClient } from "@supabase/supabase-js"
export default async (req,res)=>{
  const sb=createClient(process.env.SUPABASE_URL,process.env.SUPABASE_SERVICE_ROLE_KEY)
  await sb.from("user_items").upsert(req.body)
  res.json({ok:true})
}
