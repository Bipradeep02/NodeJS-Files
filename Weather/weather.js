const express = require("express");
//const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/Index", function (req, res) {

    console.log(__dirname);
    res.sendFile(__dirname + '\\index.html');

});

app.post("/Index", function (req, res) {


    console.log("Post request received");


    // const url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=ab7b1a22df2cd7e0b09b7e5c61c5e4a8";

    // https.get(url, function(response){
    //     console.log(response.statusCode);

    //     response.on("data", function(data){
    //         // console.log(data);
    //         const weatherData = JSON.parse(data)
    //         // console.log(weatherData);
    //         const temp = weatherData.main.temp
    //         // console.log(temp);
    //         const name = weatherData.weather[0].description
    //         // console.log(name);
    //         const image = weatherData.weather[0].icon
    //         const imageUrl = "http://openweathermap.org/img/wn/" + image + "@2x.png"
    //         res.writeHead(200, {'Content-Type': 'text/html'});
    //         res.write("<h2>The weather is currently " + name + " !</h2>");
    //         res.write("<h1>The temperature " + temp + " degree Celsius</h1>");
    //         res.write("<img src=" + imageUrl +">");
    //         res.send()
    //     })
    // })
});

app.listen(8000, function () {
    console.log("Listening at port 8000");
})
