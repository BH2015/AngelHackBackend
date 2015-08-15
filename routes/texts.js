var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Text = require('../models/Text.js');

/* GET users listing. */
//router.get('/', function(req, res) {
//  res.send('respond with a resource');
//});

router.get('/', function(req, res, next) {
  Text.find(function (err, texts) {
    if (err) return next(err);
    res.json(texts);
	var str = texts.textlinks();
	 
    var resp = str.match(/help/g);
    res.string(resp);
  });
});

/* POST /todos */
router.post('/', function(req, res, next) {
  Text.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  Text.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /todos/:id */
router.post('/:id', function(req, res, next) {
  Text.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
        console.log(req.body);
    res.json(post);
  });
});
/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  Text.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
        console.log(req.body);
    res.json(post);
  });
});


/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  Text.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
module.exports = router;
