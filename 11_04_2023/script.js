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
        var url = "https://v2.jokeapi.dev/joke/"+ query+""
        https.get(url, function(response){
            console.log(response.statusCode)
            console.log(url)
        
            response.on("data", function(data){
               const jokes = JSON.parse(data)
               console.log(jokes)
               const temp = jokes.setup
               const mazaak = jokes.joke
               if(temp == undefined){
                   res.write(`<h1> joke: ${ mazaak } </h1>`)
               }
               else{
                res.write(`<h1> santa:  ${ temp } </h1>`)
                res.write(`<h1> banta: ${ jokes.delivery } </h1>`)
               }
               res.send()
            })
        })

})








