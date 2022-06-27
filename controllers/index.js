const express = require('express')
const controller = express.Router()

controller.get('/', (req,res) =>{
    res.render('index.ejs')
})

controller.get('/schedule', (req,res) =>{
    res.render('schedules.ejs')
})

controller.get('/add', (req,res) =>{
    res.render('addschedule.ejs')
})




// controller.get('/schedules', (req, res) => {
//     const schedules = [
//     { company: "Fortnite", date: "2020-03-01", description: "pocorn" },
//     { company: "Fortnit", date: "2020-03-02", description: "poc" }
//     ]
    
//     res.render("schedules.ejs", {
//         schedule : schedules
//     })
// })

module.exports = controller