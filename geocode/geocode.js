const request = require('request');

const geocodeAddress = (address, callback) => {
    let encodedAddress = encodeURIComponent(address);
    
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyB3381FOAmcPqgShdY0Y2jHqnVAOmOYSqQ`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Google servers.');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find the address.');
        } else if (body.status === 'OK') {
            let result = body.results[0];

            callback(undefined, {
                address: result.formatted_address,
                latitude: result.geometry.location.lat,
                longitude: result.geometry.location.lng
            });
        }
    });
};

module.exports.geocodeAddress = geocodeAddress;
