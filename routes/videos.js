var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Video = require('../models/Video.js');

/* GET users listing. */
//router.get('/', function(req, res) {
//  res.send('respond with a resource');
//});

router.get('/', function(req, res, next) {
  Video.find(function (err, videos) {
    if (err) return next(err);
    res.json(videos);
  });
});

/* POST /todos */
router.post('/', function(req, res, next) {
  Video.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  Video.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /todos/:id */
router.post('/:id', function(req, res, next) {
  Video.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
        console.log(req.body);
    res.json(post);
  });
});
/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  Video.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
        console.log(req.body);
    res.json(post);
  });
});


/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  Video.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
module.exports = router;
