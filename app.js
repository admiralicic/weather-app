const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=admira%20dedica%2060%20tuzla%20bosnia&key=AIzaSyB3381FOAmcPqgShdY0Y2jHqnVAOmOYSqQ',
    json: true
}, (error, response, body) => {
    console.log(body);
});