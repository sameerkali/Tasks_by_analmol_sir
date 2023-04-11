const bodyparser = require("body-parser")
const express = require("express")
const app = express();
app.listen(3000, function () { })
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
const https = require("https")
const request = require('request')



app.post("/data", function (req, res) {
    res.send(req.body)
//     const selectedOption = req.body.selectOption;
//   console.log(selectedOption);
})
app.get('/', (req,res) =>{
        res.sendFile(__dirname + "/index.html")

})
app.post('/',(req,res)=>{
    res.send(req.body)
})


app.get('/', (req,res) =>{
    res.send(req.body+"sameer")
})






// fetch('https://v2.jokeapi.dev/joke/')
// .then(response=>{
//     return response.json()
// }).then(json => {
//     // console.log(`${json.setup} setup`)
//     console.log(`${json.joke} joke😂`)
//     // console.log(json)
// })