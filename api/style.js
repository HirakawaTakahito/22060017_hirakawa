import Groq from "groq-sdk"
const groq=new Groq({apiKey:process.env.GROQ_API_KEY})

export default async(req,res)=>{
  const {request}=req.body
  const chat=await groq.chat.completions.create({
    model:"llama-3.3-70b-versatile",
    messages:[{role:"user",content:`3パターンのコーデを出して。\n${request}`}]
  })
  const parts=chat.choices[0].message.content.split("\n\n")
  res.json({outfits:parts.slice(0,3)})
}
