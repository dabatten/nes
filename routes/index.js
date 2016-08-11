var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//------------Models--------------
var Article = mongoose.model('Article');
var Topic = mongoose.model('Topic');


//------------Params--------------

router.param('article', function (req, res, next, id) {
    var query = Article.findById(id).populate('topic');
    query.exec(function (err, article) {
        if (err) {
            return next(err);
        }
        if (!article) {
            return next(new Error('Article ' + id + ' not found.'));
        }
        req.article = article;
        return next();
    })
})

router.param('topic', function (req, res, next, id) {
    var query = Topic.findById(id).populate('articles');
    query.exec(function (err, topic) {
        if (err) {
            return next(err);
        }
        if (!topic) {
            return next(new Error('Topic ' + id + ' not found.'));
        }
        req.topic = topic;
        return next();
    })
})

//---------------Routes----------------

/* GET home page. */
router.get('/', function (req, res, next) {
    Topic.find(function (err, topics) {
        if (err) {
            return next(err);
        }
        res.render('index', {
            title: 'Express',
            topics: topics
        });
    });

});

router.get('/articles/:article', function (req, res) {
    res.render('article', {
        article: req.article
    });
});

router.get('/topics', function (req, res) {
    Topic.find(function (err, topics) {
        if (err) {
            return next(err);
        }
        res.render('topics')
    })
})

router.get('/topics/:topic', function (req, res) {
    res.render('topic', {
        topic: req.topic
    });
});

module.exports = router;
