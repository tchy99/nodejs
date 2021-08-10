const express = require('express')
const router = express.Router()
const db = require("./db")

router.get("/add",(req,res)=>{
    res.render("addconsultations",{
        nom:"Ajouter une consultation"
    })
})

router.post("/add",(req,res)=>{
    let dat = req.body
    let sql = "INSERT INTO consult(no_dossier,idmedecin,symptome,date) VALUES(?,?,?,?)"
    let tab_data = [dat.no_dossier,dat.idmedecin,dat.symptome,dat.date]
    db.pool.query(sql,tab_data,(error,results)=>{
        if(error) throw error
            //   res.json(results)
            res.redirect("/api/consultation")
         })
})

router.get("/",(req,res)=>{
    let sql = "SELECT * FROM consult"
    db.pool.query(sql,(error,results)=>{
        if(error) throw error
        // res.json(results)
         res.render("consultations",{
            nom:"Liste des consultations",
            data:results
        })
      })
})

// router.get("/:idconsultation",(req,res)=>{
//     let sql = "SELECT * FROM consultation WHERE id = ?"
//     let data = req.params.idconsultation
//     db.pool.query(sql,data,(error,results)=>{
//         if(error) throw error
//         res.json(results)
//         // res.render("/api/patient")
//     })
// })

module.exports = router 