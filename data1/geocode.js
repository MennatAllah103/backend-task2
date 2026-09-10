const request = require("request")

const geocode = (address, callback) => {

    const mapboxToken = "pk.eyJ1IjoibWVubmExMDMiLCJhIjoiY210dndrM3h4MG1kbTJ3c2ozZWI3OGh0eSJ9.nzN_DkrUrx_OEN87fIiUyQ"

    const geocodeUrl =
        "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
        encodeURIComponent(address) +
        ".json?access_token=" +
        mapboxToken

    request({ url: geocodeUrl, json: true }, (error, response) => {

        if (error) {

            callback("Unable to connect to geocode service", undefined)

        } else if (response.body.message) {

            callback(response.body.message, undefined)

        } else if (
            !response.body.features ||
            response.body.features.length === 0
        ) {

            callback("Unable to find location", undefined)

        } else {

            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1]
            })

        }

    })

}

module.exports = geocode