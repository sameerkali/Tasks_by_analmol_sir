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
})


app.post("/", function(req, res){
    const query = req.body.selectOption
        var url = "https://v2.jokeapi.dev/joke/"+ query+""
        https.get(url, function(response){
            console.log(response.statusCode)
            console.log(url)
        
            response.on("data", function(data){
               const jokes = JSON.parse(data)

               const temp = jokes.setup
               const mazaak = jokes.joke
               const delivery = jokes.delivery 
               if(temp == undefined){
                   res.write(`<h1> joke: ${ mazaak } </h1>`)
               }
               else{
                res.write(`<h1> santa:  ${ temp } </h1>`)
                res.write(`<h1> banta: ${ delivery } </h1>`)
               }
               res.send()
            })
        })
})








