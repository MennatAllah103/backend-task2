const forecast = require("./data1/forecast")
const geocode = require("./data1/geocode")

const country = process.argv[2]

if (!country) {
    console.log("Please provide a country name")
} else {

    geocode(country, (error, data) => {

        if (error) {
            console.log("ERROR:", error)
        } else {

            forecast(data.latitude, data.longitude, (error, weatherData) => {

                if (error) {
                    console.log("ERROR:", error)
                } else {
                    console.log("Country:", country)
                    console.log("Temperature:", weatherData.temperature + " °C")
                    console.log("Longitude:", data.longitude)
                    console.log("Latitude:", data.latitude)
                }

            })

        }

    })

}