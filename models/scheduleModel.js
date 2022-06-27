const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
    company: {
        type : String,
        required: true
    },    
    date:{
        type : String,
        required: true
    }, 
    description:{
        type : String
    }
});


const Schedule = mongoose.model('Schedule', scheduleSchema );


module.exports = Schedule;