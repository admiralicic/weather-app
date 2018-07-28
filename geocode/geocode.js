const request = require('request');

const geocodeAddress = (address) => {
    let encodedAddress = encodeURIComponent(address);
    
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyB3381FOAmcPqgShdY0Y2jHqnVAOmOYSqQ`,
        json: true
    }, (error, response, body) => {
        if (error) {
            console.log('Unable to connect to Google servers.');
        } else if (body.status === 'ZERO_RESULTS') {
            console.log('Unable to find the address.');
        } else if (body.status === 'OK') {
            let result = body.results[0];
            console.log(`Address: ${result.formatted_address}`);
            console.log(`Latitude: ${result.geometry.location.lat}`);
            console.log(`Longitude: ${result.geometry.location.lng}`);
        }
    });
};

module.exports = {
    geocodeAddress
}