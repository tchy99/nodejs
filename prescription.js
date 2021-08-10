const express = require('express')
const router = express.Router()
const db = require("./db")

router.get("/add",(req,res)=>{
    res.render("addprescription",{
        ti:"Ajouter une prescription"
    })
})

router.post("/add",(req,res)=>{
    let data = req.body
    let sql = "INSERT INTO pres(idpres,ordonnance) VALUES (?,?)"
    let tab_data = [data.idpres,data.ordonnance]
    db.pool.query(sql,tab_data,(err,results)=>{
        if(err) throw err;
        console.log(results);
        // res.json(results)
        res.redirect("/api/prescription/")
    })

router.get("/",(req,res)=>{
    let sql = "SELECT * FROM pres"
    db.pool.query(sql,(error,results)=>{
        if(error) throw error
        // res.json(results)
        res.render("prescriptions",{
            titre:"Liste des prescriptions",
            data:results
        })
    })
})

router.get("/:idpres",(req,res)=>{
    let sql = "SELECT * FROM pres WHERE idpres = ?"
    let data = req.params.id_consultation
    db.pool.query(sql,data,(error,results)=>{
        if(error) throw error
        // res.json(results)
        res.render("/api/prescription")
    })
})
})
module.exports = router