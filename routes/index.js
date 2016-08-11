var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//Models
var Article = mongoose.model('Article');

router.param('article', function(req, res, next, id) {
    var query = Article.findById(id);
    query.exec(function(err, article){
        if(err) {
            return next(err);
        }
        if(!article) {
            return next(new Error('Article not found.'));
        }
        req.article = article;
        return next();
    })
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/articles/:article', function(req, res){
    res.render('article', { article: req.article});
});

module.exports = router;
