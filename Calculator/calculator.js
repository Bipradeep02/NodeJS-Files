//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// app.get("/", function(req, res){
//     res.sendFile(__dirname + "/index.html");
// })

// app.post("/", function(req, res){
//     res.send("Thanks!");
// })

app.get("/Index", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/Index", function(req, res){
    var w = parseFloat(req.body.num1);
    var h = parseFloat(req.body.num2);

    var result = w / (h * h) ;

    res.send("Your BMI is = " + result);
})

// app.post("/", function(req, res){
    
//     // res.send(req.body);
    
//     var n1 = Number(req.body.num1);
//     var n2 = Number(req.body.num2);

//     var result = ;

//     res.send("The result of the calculation is = " + result);
// })

app.listen(3000, function(){
    console.log("Listening at port 3000")
});
