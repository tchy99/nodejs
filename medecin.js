const express = require('express')
const router = express.Router()
const db = require("./db")

router.get("/add",(req,res)=>{
    res.render("addmedecin",{
        title:"Ajouter un medecin"
    })
})

router.post("/add",(req,res)=>{

    let data = req.body
    let sql = "INSERT INTO medecin(nom,prenom,sexe,adresse,telephone,email,specialisation) VALUES (?,?,?,?,?,?,?)"
    let tab_data = [data.nom,data.prenom,data.sexe,data.adresse,data.telephone,data.email,data.specialisation]
   
    db.pool.query(sql,tab_data,(err,results)=>{
        if(err) throw err;
        console.log(results);
        // res.json(results)
        res.redirect("/api/medecin")
    })
})

router.get("/",(req,res)=>{
    let sql = "SELECT * FROM medecin"
    db.pool.query(sql,(error,results)=>{
        if(error) throw error
        // res.json(results)
         res.render("medecins",{
            title:"Liste des médecins",
            data:results
        })
      })
})

 // router.get("/:idmedecin",(req,res)=>{
//     let sql = "SELECT * FROM medecin WHERE id = ?"
//     let data = req.params.idmedecin
//     db.pool.query(sql,data,(error,results)=>{
//         if(error) throw error
//         res.json(results)
//         // res.render("/api/patient")
//     })
// })

module.exports = router 