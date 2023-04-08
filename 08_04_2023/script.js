"use strict"


const bodyparser = require("body-parser")
const express = require("express")
const app = express();
app.listen(3000, function(){})
app.use(bodyparser.urlencoded({extended: true}));

const https = require("https")
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})
app.post("/", function(req, res){
    // console.log("post request recived")
    // console.log(req.body.cityName);
        const query = req.body.cityName
        const apiKey = "c93d2d185fbd745cf7638e84d7125711";
        const unit = "metric"
        var url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey +"&units="+ unit +""
        https.get(url, function(response){
            console.log(response.statusCode)
        
            response.on("data", function(data){
               const weatherData = JSON.parse(data)
               console.log(weatherData)
               const temp = weatherData.main.temp
               const icon = weatherData.weather[0].icon
               const disc = weatherData.weather[0].description
               const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`
               res.write(`<h1>the temprature of ${ query } is  ${ temp } Degrees Celcious today</h1>`)
               res.write(`<p>The weather of ${ query }   currently is ${disc} </p>`)
               res.write("<img src=" + imageURL + ">")
                // res.write(`<img src= imageURL >`)                   //ye kyun nhi chal rahaa
               res.send()
            })
        })

})

app.get("/con", function(req, res){
    res.send("hay this is another message")
})
































































