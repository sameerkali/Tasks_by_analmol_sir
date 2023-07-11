
// const express = require("express");
// const bodyParser = require("body-parser");
// const ejs = require("ejs");
// const mongoose = require("mongoose");
// require("dotenv").config();

// const app = express();
// app.set("view engine", "ejs");

// app.use(express.static("public"));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const expenseSchema = new mongoose.Schema({
//   title: String,
//   amount: Number,
//   description: String,
// });

// const Expense = mongoose.model("Expense", expenseSchema);

// // ----------------------------------------------------------------------------------------

// const PostSchema = new mongoose.Schema({
//     title: String,
//     amount: Number,
//     description: String,
//   });
  
//   const Post = mongoose.model("Post", PostSchema);
  
//   const posts = [
//     {
//       title: "My first post",
//       amount: 100,
//       description: "This is my first post.",
//     },
//     {
//       title: "My second post",
//       amount: 200,
//       description: "This is my second post.",
//     },
//   ];
  

// // ----------------------------------------------------------------------------------------

// app.get("/", function (req, res) {
//   Expense.find({})
//     .then((expenses) => {
//       res.render("home", {
//         posts: posts                     // --> expenses: expenses
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/compose", function (req, res) {
//   res.render("compose");
// });

// app.post("/compose", (req, res) => {
//     const expense = new Expense({
//       title: req.body.title,
//       amount: req.body.amount,
//       description: req.body.description
//     });
  
//   expense
//     .save()
//     .then(() => {
//       res.redirect("/");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });


// app.get("/posts/:postId", function (req, res) {
//     const requestedPostId = req.params.postId;
  
//     Post.findOne({ _id: requestedPostId }, function (err, post) {
//       res.render("post", {
//         title: post.title,
//         amount: post.amount,
//         description: post.description
//       });
//     });
//   });




// app.listen(process.env.PORT || 3000, () => {
//   console.log("Server started on port 3000");
// });


























// const express = require("express");
// const bodyParser = require("body-parser");
// const ejs = require("ejs");
// const mongoose = require("mongoose");
// require("dotenv").config();

// const app = express();
// app.set("view engine", "ejs");

// app.use(express.static("public"));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const expenseSchema = new mongoose.Schema({
//   title: String,
//   amount: Number,
//   description: String,
// });

// const Expense = mongoose.model("Expense", expenseSchema);

// const PostSchema = new mongoose.Schema({
//   title: String,
//   amount: Number,
//   description: String,
// });

// const Post = mongoose.model("Post", PostSchema);

// const posts = [
  
// ];

// app.get("/", function (req, res) {
//   Expense.find({})
//     .then((expenses) => {
//       res.render("home", {
//         posts: posts,
//         expenses: expenses,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/compose", function (req, res) {
//   res.render("compose");
// });

// app.post("/compose", (req, res) => {
//   const expense = new Expense({
//     title: req.body.title,
//     amount: req.body.amount,
//     description: req.body.description,
//   });

//   expense
//     .save()
//     .then(() => {
//       res.redirect("/");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/posts/:postId", function (req, res) {
//   const requestedPostId = req.params.postId;

//   Post.findOne({ _id: requestedPostId }, function (err, post) {
//     res.render("post", {
//       title: post.title,
//       amount: post.amount,
//       description: post.description,
//     });
//   });
// });

// app.listen(process.env.PORT || 3000, () => {
//   console.log("Server started on port 3000");
// });










const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const expenseSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  description: String,
});

const Expense = mongoose.model("Expense", expenseSchema);

const PostSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  description: String,
});

const Post = mongoose.model("Post", PostSchema);

let posts = [
//   {
//     title: "My first post",
//     amount: 100,
//     description: "This is my first post.",
//   },
//   {
//     title: "My second post",
//     amount: 200,
//     description: "This is my second post.",
//   }, 
];

app.get("/", function (req, res) {
  Expense.find({})
    .then((expenses) => {
      res.render("home", {
        posts: posts,
        expenses: expenses,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/compose", function (req, res) {
  res.render("compose");
});

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

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started on port 3000");
});
