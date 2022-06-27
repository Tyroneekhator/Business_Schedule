const express = require('express')
const controller = express.Router()


// get index page
controller.get('/', (req,res) =>{
    res.render('index.ejs')
})

//get the schedule page
controller.get('/schedule', (req,res) =>{
    res.render('schedules.ejs')
})

//get the add schedule page
controller.get('/add', (req,res) =>{
    res.render('addschedule.ejs')
})






module.exports = controller