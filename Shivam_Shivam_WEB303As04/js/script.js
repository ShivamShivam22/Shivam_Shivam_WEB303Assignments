/*
    Assignment #4
    Shivam Shivam
*/

$(function () {
    // your code here

    if (!navigator.geolocation) {
        $("#loc").html("<h1>Geolocation is not supported by your browser.</h1>");
    } else {
        navigator.geolocation.getCurrentPosition(success, fail);

        function success(pos) {
            console.log(pos);
            let lat = pos.coords.latitude;
            let lon = pos.coords.longitude;
            let accuracy = pos.coords.accuracy;

            $("#locationhere").html("<p>Your latitude is: " + lat + "</p>");
            $("#locationhere").append("<p>Your longitude is: " + lon + "</p>");
            $("#locationhere").append(`<p>Location accuracy: ${accuracy.toFixed(2)} km</p>`);

            if (localStorage.getItem("storedLatitude") && localStorage.getItem("storedLongitude")) {
                let storedLat = parseFloat(localStorage.getItem("storedLatitude"));
                let storedLon = parseFloat(localStorage.getItem("storedLongitude"));

                let distance = calcDistance(lat, lon, storedLat, storedLon);
                $("#locationhere").append("<p>You traveled approximately " + distance.toFixed(2) + " km since your last visit.</p>");
                $("h2").html("Welcome back to the page!");
            } else {
                $("h2").html("Welcome to the page for the first time!");
            }
            localStorage.setItem("storedLatitude", lat);
            localStorage.setItem("storedLongitude", lon);
        }

        function fail() {
            $("#locationhere").html("<p>We cannot get your location.</p>");
        }
    }


    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


