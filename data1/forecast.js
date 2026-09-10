const request = require("request")

const forecast = (latitude, longitude, callback) => {

    const weatherApiKey = "f66311f990510cbf6cfdbcda519388b7"

    const url =
        "http://api.weatherstack.com/current?access_key=" +
        weatherApiKey +
        "&query=" +
        latitude +
        "," +
        longitude

    request({ url: url, json: true }, (error, response) => {

        if (error) {

            callback("Unable to connect to weather API service", undefined)

        } else if (response.body.error) {

            callback(response.body.error.info, undefined)

        } else {

            callback(undefined, {
                temperature: response.body.current.temperature
            })

        }

    })

}

module.exports = forecast