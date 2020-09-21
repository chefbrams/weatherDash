var dateStamp = $("#date");
var toDay = moment().format('L');
dateStamp.prepend(toDay);


$("#searchBtn").on("click", cityInfo);

function cityInfo() {
    var citySearch = $("#searchBar").val();
    dateStamp.prepend(citySearch + " ");

    var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=703575c8b241108842bb5a5ed0aebafd&units=imperial";
    $.ajax({
        url: cityUrl,
        method: "GET"
    })
        .then(function (response) {
            console.log(response)

            $("#currentTemp").append(" " + JSON.stringify(response.main.temp));
            $("#currentHum").append(" " + JSON.stringify(response.main.humidity));
            $("#windSpeed").append(" " + JSON.stringify(response.wind.speed));
            // $("#currentTemp").append(JSON.stringify(response.main.temp));

            let uvLat = JSON.stringify(response.coord.lat);
            let uvLon = JSON.stringify(response.coord.lon);


            var uvUrl = "https://api.openweathermap.org/data/2.5/uvi?lat=" + uvLat + "&lon=" + uvLon + "&appid=703575c8b241108842bb5a5ed0aebafd&units=imperial";
            $.ajax({
                url: uvUrl,
                method: "GET"
            })
                .then(function (response) {
                    console.log(response)
                    $("#uvIndex").append(" " + JSON.stringify(response.value));

                });


        });


    // var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=703575c8b241108842bb5a5ed0aebafd&units=imperial";
    // $.ajax({
    //     url: cityUrl,
    //     method: "GET"
    // })
    //     .then(function (response) {
    //         console.log(response)
    //     });

}

