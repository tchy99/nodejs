const express = require('express')
const router = express.Router()

const db = require('./db')
router.get("/patient/:nomjeunefillemere",(req,res)=>{
    let sql = "SELECT * FROM patient WHERE nomjeunefillemere = ?"

    db.pool.query(sql,req.params.nomjeunefillemere,(error,results)=>{
        if(error) throw error

        res.render("search",{
            titre: "Recherche patient",
            data :results
        })
    })
})

module.exports = router