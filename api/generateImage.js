import fetch from "node-fetch"
export default async(req,res)=>{
  const r=await fetch("https://api.nanobanana.ai/generate",{
    method:"POST",
    headers:{Authorization:`Bearer ${process.env.NANO_BANANA_KEY}`,"Content-Type":"application/json"},
    body:JSON.stringify({prompt:req.body.prompt,size:"512x512"})
  })
  const d=await r.json()
  res.json({image:d.image_url})
}
