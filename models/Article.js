
// Require Mongoose
var mongoose = require("mongoose");
//Create schema
var schema = mongoose.Schema;

//Create Article Schema class
var ArticleSchema = new Schema({
    // Title article
    title: {
        type: String,
        required: true
    },

    //Date Article
    date: {
        type:String,
        required: true
    },
// Link Article
    url:{
        type: String
    },
});

// Create the Article model with Mongoose
var Article = mongoose.model("Article", ArticleSchema);
// Exports the model
module.exports = Article;