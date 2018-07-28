const request = require('request');

getWeather = (lat, lng, callback) => {
    request({
        url:`https://api.darksky.net/forecast/285ba36b06ec89f7c86850022cb16052/${lat},${lng}`,
        json: true 
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather.')
        }
    });
};


module.exports.getWeather = getWeather;