"use strict"

const bodyparser = require("body-parser")
const express = require("express")
const app = express();
app.listen(3000, function () { })
app.use(bodyparser.urlencoded({ extended: true }));
const https = require("https")

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function (req, res) {
    const query = req.body.joke
    console.log(req.body.joke + "sameer")
    var url = `https://v2.jokeapi.dev/joke/${query}`
    https.get(url, function (response) {
        console.log(response.statusCode)

        response.on("data", function (data) {
            const weatherData = JSON.parse(data)
            res.write(`<h1>The joke is </h1>`)
            res.write(`<p> == : ${query}</p>`)
            res.send()
        })
    })
})
