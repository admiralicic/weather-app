// const yargs = require('yargs');
// const geocode = require('./geocode/geocode');

// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv; 
// // https://api.darksky.net/forecast/285ba36b06ec89f7c86850022cb16052/44.535925,18.6399069
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });
 
const request = require('request');

request({
    url:'https://api.darksky.net/forecast/285ba36b06ec89f7c86850022cb16052/44.535925,18.6399069',
    json: true 
}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        console.log(body.currently.temperature);
    } else {
        console.log('Unable to fetch weather.')
    }
});