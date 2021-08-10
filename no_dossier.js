const express = require('express')
const router = express.Router()
const db = require("./db")

router.get("/add",(req,res)=>{
    res.render("adddossier",{
        n:"Ajouter un dossier"
    })
})

// router.post("/add",(req,res)=>{

//     let data = req.body
//     let sql = "INSERT INTO dossier(id_patient) VALUES (?)"
//     let tab_data = [data.id_patient]
   
//     db.pool.query(sql,tab_data,(err,results)=>{
//         if(err) throw err;
//         console.log(results);
//         // res.json(results)
//         res.redirect("/api/no_dossier")
//     })
// })

router.get("/",(req,res)=>{
    let sql = "SELECT * FROM dossier"
    db.pool.query(sql,(error,results)=>{
        if(error) throw error
        // res.json(results)
         res.render("dossiers",{
            title:"Liste des dossiers",
            data:results
        })
      })
})

router.post("/create"),(req,res)=>{
    let data= req.body
    let sql = "INSERT INTO dossier (id_patient) select idpatient from patient)" 
    db.pool.query(sql,(error,results)=>{
        if(error) throw error
        // res.json(results)
         res.render("dossiers",{
            title:"Liste des dossiers",
            data:results
        })
})
}
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