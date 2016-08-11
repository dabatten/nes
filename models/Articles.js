var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
    title: String,
    author: String,
    body: String,
    wikiLink: String,
    date: {
        type: Date,
        default: Date.now
    },
    image: String

});

mongoose.model('Article', ArticleSchema);
