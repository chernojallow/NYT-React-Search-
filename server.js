//Server dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");

require('dotenv').config();
// Require Articles Schema
var Article = require("./models/Article.js");

// MongoDB Configuration 
if(process.env.NODE_ENV == 'production'){
  mongoose.connect(`mongodb://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@ds261429.mlab.com:61429/heroku_2jc810zq`);
}
else{
  mongoose.connect('mongodb://localhost/NYT-React-Search');
}
var db = mongoose.connection;

// Show any Mongoose errors
db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

// Once logged in to the db through mongoose, log a success message
db.once('open', function() {
  console.log('Mongoose connection successful.');
});


// Initialize Express
var app = express();
//Setting inial port and later deploy to heroku
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));


//Route to get all saved articles
app.get("api/savedArticle", function(req, res){
    // Find the all the data and sort in decending order
    Article.find({}).limit(10).exec(function(err, doc) {
        if (err) {
          console.log(err);
        }
        else {
          res.send(doc);
        }
      });
    });
    
    // main routes here 
  


    // Routes to save articles from searches 

// Route to save articles from searches.
app.post("/api/savedArticles", function(req, res) {
   
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
app.delete("/api/savedArticle/:id", function(req, res) {

    console.log("Article ID to delete: " + req.params.id);
  
    Article.findByIdAndRemove(req.params.id, function (err, response) {
      if(err){
        res.send("Delete didn't work: " + err);
      }
      res.send(response);
    });
  });
  
  // Listener.
  app.listen(PORT,function() {
    console.log("App listening on PORT: " + PORT);
  });
 


