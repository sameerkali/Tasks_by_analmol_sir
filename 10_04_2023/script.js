// "use strict"

// const bodyparser = require("body-parser")
// const express = require("express")
// const app = express();
// app.listen(3000, function () { })
// app.use(bodyparser.urlencoded({ extended: true }));
// const https = require("https")

// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/index.html")
// })

// app.post("/", function (req, res) {
//     // const query = Math.floor(Math.random() * 1000);
//     // console.log(req.body.joke + "sameer")
//     var url = ""
//     https.get(url, function (response) {
//         console.log(response.statusCode)

//         response.on("data", function (data) {
//             const weatherData = JSON.parse(data)
//             res.write(`<p> == : ${url}</p>`)
//             res.send()
//         })
//     })
// })

"use strict"


const bodyparser = require("body-parser")
const express = require("express")
const app = express();
app.listen(5000, function () { })
app.use(bodyparser.urlencoded({ extended: true }));
const https = require("https")

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function (req, res) {
    const query = req.body.data
    console.log(query)
    var url = "https://v2.jokeapi.dev/joke/"+query+""
    https.get(url, function (response) {
        console.log(response.statusCode)

        response.on("data", function (setup) {
            const temp = joke.main.setup
            const jokes = JSON.parse(setup)
            res.write(`<h1>The joke is </h1>`)
            res.write(`<p>The weather of ${temp} </p>`)
            res.send()
        })
    })

})