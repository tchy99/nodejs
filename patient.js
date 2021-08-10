const express = require('express')
const router = express.Router()
const db = require("./db")

router.get("/add",(req,res)=>{
    res.render("addpatient",{
        titre:"Ajouter un patient"
    })
})

router.post("/add",(req,res)=>{
    let data = req.body
    let sql = "INSERT INTO patient(nom,prenom,sexe,datenaissance,telephone,adresse,age,nomjeunefillemere) VALUES (?,?,?,?,?,?,?,?)"
    let tab_data = [data.nom,data.prenom,data.sexe,data.datenaissance,data.telephone,data.adresse,data.age,data.nomjeunefillemere]
    db.pool.query(sql,tab_data,(err,results)=>{
        if(err) throw err;
        console.log(results);
        // res.json(results)
        res.redirect("/api/patient")
    })
})

router.get("/",(req,res)=>{
    let sql = "SELECT * FROM patient"
    db.pool.query(sql,(error,results)=>{
        if(error) throw error
        // res.json(results)
        res.render("patients",{
            titre:"Liste des patients",
            data:results
        })
    })
})

router.get("/:idpatient",(req,res)=>{
    let sql = "SELECT * FROM patient WHERE idpatient = ?"
    let data = req.params.idpatient
    db.pool.query(sql,data,(error,results)=>{
        if(error) throw error
        res.json(results)
        // res.render("detailspatient",{
        //     na:"Details du Patient",
        //     data:results
        // })
    })
    router.get("/edit/:idpatient",(req,res)=>{
        let sql = "SELECT * FROM patient WHERE idpatient = ?"
        let data = req.params.idpatient
        db.pool.query(sql,data,(error,results)=>{
            if(error) throw error
            // res.json(results)
            res.render("modifierpa",{
                na:"Details du Patient",
                data:results
            })
        })   
})
})

module.exports = router 