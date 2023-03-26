const express = require('express');
const app = express();
const {connectMongoose, user} = require("./database"); 
const ejs = require("ejs");
app.listen(3000, ()=>{console.log("listen on local hoast 3000")});


/////////////////////////////////////////////////////////////////////////////////
connectMongoose();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

/////////////////////////////////////////////////////////////////////////////////
app.set("view engine", "ejs");




app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/register",(req,res)=>{
    res.render("register");
});
app.get("/login",(req,res)=>{
    res.render("login");
});

app.post("/register",async (req, res)=>{
    const user = await User.findOne({username: req.body.username});
    if(user) return res.status(400).send("user already exist");

    const newUser = await User.create(req.body);
    res.status(201).send(newUser);
});