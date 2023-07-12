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
  useUnifiedTopology: true
}, console.log('database connected'));

const expenseSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  description: String
});

const Expense = mongoose.model("Expense", expenseSchema);

const PostSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  description: String
});

const Post = mongoose.model("Post", PostSchema);

const posts = [];

// app.get("/", function (req, res) {
//   Expense.find({})
//     .then((expenses) => {
//       res.render("home", {
//         posts: posts,
//         expenses: expenses
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });



app.get("/", function (req, res) {
  Expense.find({})
    .then((expenses) => {
      res.render("home", {
        expenses: expenses
      });
    })
    .catch((err) => {
      console.log(err);
      res.render("home", { expenses: [] }); // Render with empty expenses if an error occurs
    });
});



app.get("/compose", function (req, res) {
  res.render("compose");
});
app.get("/post", function (req, res) {
  res.render("post");
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
//   useUnifiedTopology: true
// });

// const expenseSchema = new mongoose.Schema({
//   title: String,
//   amount: Number,
//   description: String
// });

// const Expense = mongoose.model("Expense", expenseSchema);

// const PostSchema = new mongoose.Schema({
//   title: String,
//   amount: Number,
//   description: String
// });

// const Post = mongoose.model("Post", PostSchema);

// const posts = [];

// app.get("/", function (req, res) {
//   Post.find({})
//     .then((posts) => {
//       res.render("home", {
//         posts: posts
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/compose", function (req, res) {
//   res.render("compose");
// });
// app.get("/post", function (req, res) {
//   res.render("post");
// });
// // app.post("/compose", (req, res) => {
// //   const expense = new Expense({
// //     title: req.body.title,
// //     amount: req.body.amount,
// //     description: req.body.description
// //   });

// //   expense
// //     .save()
// //     .then((posts) => {
// //       res.render("home", {
// //   posts: posts
// // });
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //     });
// // });
// app.post("/compose", (req, res) => {
//   const post = new Post({
//     title: req.body.title,
//     amount: req.body.amount,
//     description: req.body.description
//   });

//   post
//     .save()
//     .then(() => {
//       posts.push(post);
//       Post.find({})
//         .then((posts) => {
//           res.render("home", {
//             posts: posts
//           });
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.listen(process.env.PORT || 3000, () => {
//   console.log("Server started on port 3000");
// });
