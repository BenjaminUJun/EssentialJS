

    var APPID = 'eee5ab7fffb62d126756d9b810ee1875';
    getLocation();

    function getLocation() {
        $.getJSON('http://ipinfo.io/', function(location) {
            $('#location').html(location.city + ", " + location.region);
            var loc = location.loc;
            var units = getUnits(location.country);
            getWeather(loc, units);
        })
    }

    function getWeather(location, units) {
        var lat = location.split(',')[0];
        var lon = location.split(',')[1];
        var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + "&units=" + units + "&APPID=" + APPID;
        googleMap(lat,lon);

        $.get(weatherApiUrl, function(data) {

            console.log(data);

            // decide on what unit to show
            var roundedTemp = Math.round(data.main.temp);
            if (units == 'imperial') {
                $('#temperature').html(roundedTemp + " F");
            } else {
                $('#temperature').html(roundedTemp + " C");
            }


            $('#description').html(data.weather[0].description);
            $('#wind').html(data.wind.speed + " at " + data.wind.deg);
        })


    }

    function getUnits(country) {
        var imperial = ['US', 'BS', 'BZ', 'KY', 'PW'];
        var units = '';
        if (imperial.indexOf(country) === -1) {
            units = 'metric';
        } else {
            units = 'imperial';
        }
        return units;
    }




var map;
function googleMap(latitude, longitude) {
   var lat = parseFloat(latitude);
   var lon = parseFloat(longitude);
    map = new google.maps.Map(document.getElementById('googleMap'), {
        center: {
            lat: lat,
            lng: lon
        },
        zoom: 13
    });
}
