var mongoose = require('mongoose');

var TopicSchema = new mongoose.Schema({
    name: String,
    articles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    }]

});

mongoose.model('Topic', TopicSchema);
