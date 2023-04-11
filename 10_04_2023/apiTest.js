const bodyparser = require("body-parser")
const express = require("express")
const app = express();
app.listen(3000, function () { })
app.use(bodyparser.urlencoded({ extended: true }));
const https = require("https")
const request = require('request')



app.get("/", (req, res) => {
    const url = "https://swapi.dev/api/planets/ "  //https://swapi.dev/api/planets/   //https://v2.jokeapi.dev/joke/any

    // https.get(url, function(responce){
    //    console.log(responce.statusCode);
    //    console.log(responce.name);
    // })


    res.send("main bhaot pareshan ho chuka hu ab")
})


