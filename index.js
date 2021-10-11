// require all packages
const express = require("express");
const app = express();
const colors = require("colors");
const path = require("path");
const { v4: uuid } = require("uuid");
const methodOverride = require("method-override");

// basic use & setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req,res) => {
   res.redirect("https://sareltours.com");
})

app.listen(8080, () => {
  console.log("Server is runing...".green);
});
