
// Include Server Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

// Require Article Schema
const Article = require("./models/Article");

// Create Instance of Express
const app = express();
// Sets an initial port.
const PORT = process.env.PORT || 8080;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

mongoose.connect(`mongodb://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@ds261429.mlab.com:61429/heroku_2jc810zq`);
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Route to get all saved articles.
app.get("/api/saved", function(req, res) {

  // We will find all the records, sort it in descending order, then limit the records to 5
  Article.find({}).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// Main "/" Route. Redirects user to rendered React application.
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// Route to save articles from searches.
app.post("/api/saved", function(req, res) {

  // Save article.
  Article.create({
    title: req.body.title,
    date: req.body.date,
    url: req.body.url
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Saved Article");
    }
  });
});

// Route to delete saved article.
app.delete("/api/saved/:id", function(req, res) {

  console.log("Article ID to delete: " + req.params.id);

  Article.findByIdAndRemove(req.params.id, function (err, response) {
    if(err){
      res.send("Delete didn't work: " + err);
    }
    res.send(response);
  });
});

// Listener.
app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});