const bodyparser = require("body-parser")
const express = require("express")
const app = express();
app.listen(4000, function () { })
app.use(bodyparser.urlencoded({ extended: true}));
app.use(bodyparser.json())
const https = require("https")
const request = require('request')


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
    // const jonar = req.body
    // const url = `https://v2.jokeapi.dev/joke/any`
    // console.log(url)
    // request({ url: url }, (err, res) => {
    //     const data = JSON.parse(res.body)
    //     console.log(data.setup)
    // })
})


app.post("/", function(req, res){
    const query = req.body.selectOption
    // console.log(query);
        var url = "https://v2.jokeapi.dev/joke/"+ query+""
        https.get(url, function(response){
            console.log(response.statusCode)
            console.log(url)
        
            response.on("data", function(data){
               const jokes = JSON.parse(data)
               console.log(jokes)
               const temp = jokes.setup
               res.write(`<h1>the joke  is ${jokes.setup}</h1>`)
               res.send()
            })
        })

})








