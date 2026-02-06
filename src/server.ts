import express from "express"
import cors from "cors"

const app = express()
app.use(
  cors({
    origin: [
      "http://localhost:5173", 
      "https://react-user-crud-tawny.vercel.app"
    ],
    credentials: true
  })
);
app.use(express.json())

let users:any[]=[]

app.get("/users",(req,res)=>{
  res.json(users)
})

app.post("/users",(req,res)=>{
  const user={id:Date.now(),...req.body}
  users.push(user)
  res.json(user)
})

app.put("/users/:id",(req,res)=>{
  const id=Number(req.params.id)
  users=users.map(u=>u.id===id?{...u,...req.body}:u)
  res.json({})
})

app.delete("/users/:id",(req,res)=>{
  const id=Number(req.params.id)
  users=users.filter(u=>u.id!==id)
  res.json({})
})

app.listen(process.env.PORT||10000, 
  () => {
    console.log("server running on 10000")
  }
)
