var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Profile = require('../models/Profile.js');

/* GET users listing. */
//router.get('/', function(req, res) {
//  res.send('respond with a resource');
//});

router.get('/', function(req, res, next) {
  Profile.find(function (err, profiles) {
    if (err) return next(err);
    res.json(profiles);
  });
});

/* POST /todos */
router.post('/', function(req, res, next) {
  Profile.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  Profile.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /todos/:id */
router.post('/:id', function(req, res, next) {
  Profile.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
        console.log(req.body);
    res.json(post);
  });
});
/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  Profile.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
        console.log(req.body);
    res.json(post);
  });
});


/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  Profile.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
module.exports = router;
