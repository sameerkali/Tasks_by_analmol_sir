// This code imports the Express, body-parser, ejs, and mongoose modules.
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT;
// This creates a new Express application.
const app = express();

// This sets the view engine to EJS.
app.set("view engine", "ejs");

// This middleware tells Express to serve static files from the `public` directory.
app.use(express.static("public"));

// This middleware parses JSON and URL-encoded form data from requests.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// This connects to the MongoDB database.
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, console.log('database connected'));

// This creates a new Mongoose schema for expenses.
const expenseSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  description: String
});

// This creates a new Mongoose model for expenses.
const Expense = mongoose.model("Expense", expenseSchema);

// This creates a new Mongoose schema for posts.
const PostSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  description: String
});

// This creates a new Mongoose model for posts.
// const Post = mongoose.model("Post", PostSchema);

// This is an array of posts.
// const posts = [];

// This route renders the home page, which lists all of the expenses.
app.get("/", function (req, res) {
  Expense.find({})
    .then((expenses) => {
      res.render("home", {
        expenses: expenses
      });
    })
    .catch((err) => {
      console.log(err);
      res.render("home", { expenses: [] }); });
});

// This route renders the compose page, which allows users to create new expenses.
app.get("/compose", function (req, res) {
  res.render("compose");
});

// This route renders the post page, which allows users to view and edit posts.
// app.get("/post", function (req, res) {
//   res.render("post");
// });

// This route creates a new expense.
app.post("/compose", (req, res) => {
  const expense = new Expense({
    title: req.body.title,
    amount: req.body.amount,
    description: req.body.description,
  });

  expense
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

// This starts the Express server on port.
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
