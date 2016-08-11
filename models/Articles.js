var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
    topic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Topic'
    },
    title: String,
    author: String,
    body: String,
    wikiLink: String,
    date: {
        type: Date,
        default: Date.now
    },
    image: String,

});

mongoose.model('Article', ArticleSchema);
