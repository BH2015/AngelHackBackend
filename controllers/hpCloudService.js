var request = require('request');

var apiKey = "0a9f1ae2-e1e1-4c0b-bd08-c28cbed4cf0d";


module.exports = {
    callSentiment: function (text, done) {
        request({
            url: 'https://api.idolondemand.com/1/api/sync/analyzesentiment/v1', //URL to hit
            qs: {apikey: apiKey, text: text}, //Query string data
            method: 'GET'
        }, function (error, response, body) {
            if (error) {
                console.log(error);
            } else {
                console.log(response.statusCode, body);
            }
            done(error, JSON.parse(body));
        });
    }
};
