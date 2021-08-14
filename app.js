require('dotenv').config()
const express = require('express')
const http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
  })

  .listen(process.env.PORT || 8080, "127.0.0.1");

const app = express()
// load module etudiant
const patient = require("./patient")
const medecin = require("./medecin")
const consultation = require("./consultation")
const no_dossier = require("./no_dossier")
const prescription = require("./prescription")
//configurer 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/patient",patient)
app.use("/api/medecin",medecin)
app.use("/api/consultation",consultation)
app.use("/api/no_dossier",no_dossier)
app.use("/api/prescription",prescription)
app.use(express.static('bootstrap'))
app.use(express.static('css'))
app.use(express.static('images'))
app.set("views","./views")
app.set("view engine","pug")
app.get('/',(req,res)=>{
  // res.send(' test ok')
  res.render("index",{
    titre:"Welcome to my clinique"
})
})
 
const port = process.env.PORT
app.listen(port,()=>{
    console.log(`Demarrage du serveur : http://localhost:${port}`)
})
