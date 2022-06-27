const express = require("express");
const app = express()
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Schedule = require('./models/scheduleModel');

mongoose.connect("mongodb+srv://tyrone98:admin@cluster0.us0x3.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
}, function(error){
    if(error){
        console.log(error);
    }else{
        console.log("connected to the database")
    }

});







const indexcontroller = require('./controllers')



app.set('view engine', 'ejs')
app.use('/', indexcontroller)
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))




app.get('/schedules', (req, res) => {

        Schedule.find({}, function(error,schedules){
            if(error){
                console.log("ppppppppppppppppppppppppp")
                console.log(error);
            } else{
                res.render("schedules.ejs", {
                        schedule : schedules
                });
            } 
        });

});


app.get('/schedule/:id', (req, res) => {

        var id = req.params.id;
        Schedule.findById(id, function(error,foundSchedule){
            if(error){
                console.log("cant find id.")
            }else{
                    res.render("schedule",{
                    company: foundSchedule.title,
                    date: foundSchedule.date,
                    description: foundSchedule.description
                });

            }
        })

    

});

app.get('/schedule/edit/:id', (req, res) => {

        var id = req.params.id;
        Schedule.findById(id, function(error,foundSchedule){
            if(error){
                console.log("cant find id.")
            }else{
                    res.render("edit",{
                    company: foundSchedule.company,
                    date: foundSchedule.date,
                    description: foundSchedule.description,
                    id: id

                });

            }
        })

    

});

app.post("/update/:id",function(req,res){
     var id = req.params.id;
     Schedule.findByIdAndUpdate(id,{
        company: req.body.company,
        date:  req.body.date,
        description: req.body.description
     }, function(err,updatedGame){
        if(err){
            console.log("couldnt update")
            console.log(err)
        }else{
            res.redirect("/schedules");
            console.log("update game :" + updatedGame)
        }
     })
})

app.post("/addschedule",(req,res) =>{
    var data = req.body;
    
    Schedule.create({
        company: data.company,
        date: data.date,
        description: data.description
    },function(error, data){
        if(error){
            console.log("error no addtion");
        }else{
            console.log("added")
            console.log(data);
        }
    });
    res.redirect('/schedules')
});

app.get("/schedule/delete/:id",function(req,res){
    var id = req.params.id
    Schedule.findByIdAndDelete(id,function(err){
        if(err){
            console.log("Error deleting game")
            console.log(err);
        }else{
            console.log("Deleted" + id);
            res.redirect("/schedules")
        }
    })
});


app.listen(process.env.PORT || 3000)
