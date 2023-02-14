// module variable
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// const variable
//const PORT_NUM = 3000;

// app setting
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

// assign body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// prior routing
//app.get("/", (req, res) => {
//	res.render("index.ejs")
//});
//app.get("/login", (req, res) => {
//	res.render("login.ejs");
//});

// routing
const router = require("./src/routes/index.js");
app.use("/", router)	// use: method Assigning middle-ware

module.exports = app;
