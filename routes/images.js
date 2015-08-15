var express = require('express');
var router = express.Router();
var Profile = require('../models/Profile.js');
var mongoose = require('mongoose');
var Image = require('../models/Image.js');

/* GET users listing. */
//router.get('/', function(req, res) {
//  res.send('respond with a resource');
//});

router.get('/', function(req, res, next) {
  Image.find(function (err, images) {
    if (err) return next(err);
    //res.json(images);
    	Profile.find({}, {'emailaddress': 1, '_id': 0}, function (err, emails){
		    if (err) return next(err);
		    res.json(emails);	
	   });
  });
});

/* POST /todos */
router.post('/', function(req, res, next) {
  Image.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  Image.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /todos/:id */
router.post('/:id', function(req, res, next) {
  Image.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
        console.log(req.body);
    res.json(post);
  });
});
/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  Image.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
        console.log(req.body);
    res.json(post);
  });
});


/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  Image.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
module.exports = router;
