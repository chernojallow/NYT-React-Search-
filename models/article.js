
// Require Mongoose
const mongoose = require('mongoose');
//Create a Schema Class
const Schema = mongoose.Schema;
//Create Article Schema
const articleSchema = new Schema({
    
    // Title of Article
  title: { 
    type: String, 
    required: true 
},

 //url 
  url: { 
      type: String, 
      required: true 
    },
    
    // Article id
  articleId: { 
      type: String 
    }
});

// Create the Article model with Mongoose
const Article = mongoose.model('Article', articleSchema);

// Exports the model
module.exports = Article;