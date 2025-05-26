const express = require("express")
const app = express()
app.get("/",(req,res)=>{
   res.send("Welcome to Express Cafe!")
})
app.get("/menu",(req,res)=>{
res.send("Here is our menu: 🍕🍔🥤")
})
app.get("/about",(req,res)=>{
 res.send("We serve code with coffee! ☕💻")
})
app.get("/contact",(req,res)=>{
    res.send("Contact us at: naveen@expresscafe.com 📬")
})
app.listen(4000)