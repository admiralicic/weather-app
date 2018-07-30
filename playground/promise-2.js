const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        let encodedAddress = encodeURIComponent(address);
    
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyB3381FOAmcPqgShdY0Y2jHqnVAOmOYSqQ`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to Google servers.');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find the address.');
            } else if (body.status === 'OK') {
                let result = body.results[0];

                resolve({
                    address: result.formatted_address,
                    latitude: result.geometry.location.lat,
                    longitude: result.geometry.location.lng
                });
            }
        });
    });
};

geocodeAddress('Admira Dedica 60 75000 tuzla').then((location) => {
    console.log(JSON.stringify(location));
}).catch((errorMessage) => {
    console.log(errorMessage);
});