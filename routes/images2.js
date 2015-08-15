var express = require('express');
var router = express.Router();
var Profile = require('../models/Profile.js');
var mongoose = require('mongoose');
var Image = require('../models/Image.js');
var mandrill_client = new mandrill.Mandrill('qCvRgqX5FE4Kk0L3M-3wrQ');

/* GET users listing. */
//router.get('/', function(req, res) {
//  res.send('respond with a resource');
//});

router.get('/', function(req, res, next) {
  Image.find(function (err, images) {
    if (err) return next(err);
	//Profile.find({},{emailaddress:1,_id:0},function(err,emailaddress){


	//res.json(emailaddress);}
	/*
	var message1 = {
            	"html": "<h1>Urgent</h1><br/><p>Organisation: "+post.imagelink+"</p><p>Date: "+ +"</p>",
    		"text": "Urgent - "+post.imagelink+" Date: "+new Date(),
    		"subject": "Urgent from Crime Push",
    		"from_email": post.email,
    		"from_name": post.,
    		"to": [{
            		"email": "",
            		"name": ""
        		}],
    		"headers": {
        		"Reply-To": post.email
    		},
    			"important": true,
    			"track_opens": true,
    			"track_clicks": true,
    			"auto_text": true

		};


	mandrill_client.messages.send({"message": message1}, function(result) {
    	console.log(result);

	}, function(e) {
    	// Mandrill returns the error as an object with name and message keys
    	console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
    	// A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
	});

*/

    res.json(images);
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
