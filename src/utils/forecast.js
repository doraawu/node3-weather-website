//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const request = require ('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=fd9374887bf6f3b04d81d79b7accb137&query=' + latitude + ',' + longitude + '&units=f'

    request ({url, json: true}, (error, {body}) => {
        if (error) {
            callback ('unable to connect weather service', undefined)
        } else if (body.error) {
            callback ('Unable to find location', undefined)
        } else {
            callback (undefined, body.current.weather_descriptions[0] + '. it is currently ' + body.current.temperature + ' degrees out.' + ' It feels like ' + body.current.feelslike + ' degrees out. The humidity is ' + body.current.humidity + '%.')
        }
    });
};

module.exports = forecast;