var dateStamp = $("#date");
var toDay = moment().format('L');
dateStamp.prepend(toDay);
let dayOne = $("#dayOne");
var toMorrow = moment().add(1, 'day').format("L");
dayOne.append(toMorrow);
let dayTwo = $("#dayTwo");
var twoMorrow = moment().add(2, 'day').format("L");
dayTwo.append(twoMorrow);
let dayThree = $("#dayThree");
var threeMorrow = moment().add(3, 'day').format("L");
dayThree.append(threeMorrow);
let dayFour = $("#dayFour");
var fourMorrow = moment().add(4, 'day').format("L");
dayFour.append(fourMorrow);
let dayFive = $("#dayFive");
var fiveMorrow = moment().add(5, 'day').format("L");
dayFive.append(fiveMorrow);


$("#searchBtn").on("click", cityInfo);

function cityInfo() {
    var citySearch = $("#searchBar").val().toLowerCase(

    );
    dateStamp.prepend(citySearch + " ");
    localStorage.setItem(citySearch, citySearch);
    let cityStore = localStorage.getItem(citySearch);
    $(".list").append(cityStore);

    var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=703575c8b241108842bb5a5ed0aebafd&units=imperial";
    $.ajax({
        url: cityUrl,
        method: "GET"
    })
        .then(function (response) {
            // console.log(response)

            $("#currentTemp").append(" " + JSON.stringify(response.main.temp));
            $("#currentHum").append(" " + JSON.stringify(response.main.humidity));
            $("#windSpeed").append(" " + JSON.stringify(response.wind.speed));
            let wIcon = ("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png'>");
            $("#date").append(wIcon);
            let uvLat = JSON.stringify(response.coord.lat);
            let uvLon = JSON.stringify(response.coord.lon);


            var uvUrl = "https://api.openweathermap.org/data/2.5/uvi?lat=" + uvLat + "&lon=" + uvLon + "&appid=703575c8b241108842bb5a5ed0aebafd&units=imperial";
            $.ajax({
                url: uvUrl,
                method: "GET"
            })
                .then(function (response) {
                    // console.log(response)
                    $("#uvIndex").append(" " + JSON.stringify(response.value));

                });


        });


    var fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&appid=703575c8b241108842bb5a5ed0aebafd&units=imperial";
    $.ajax({
        url: fiveDayUrl,
        method: "GET"
    })
        .then(function (response) {
            // console.log(response)
            $("#tempOne").append(JSON.stringify(response.list[1].main.temp));
            $("#tempTwo").append(JSON.stringify(response.list[2].main.temp));
            $("#tempThree").append(JSON.stringify(response.list[3].main.temp));
            $("#tempFour").append(JSON.stringify(response.list[4].main.temp));
            $("#tempFive").append(JSON.stringify(response.list[5].main.temp));
            $("#humOne").append(JSON.stringify(response.list[1].main.humidity));
            $("#humTwo").append(JSON.stringify(response.list[2].main.humidity));
            $("#humThree").append(JSON.stringify(response.list[3].main.humidity));
            $("#humFour").append(JSON.stringify(response.list[4].main.humidity));
            $("#humFive").append(JSON.stringify(response.list[5].main.humidity));
            let oneIcon = ("<img src='http://openweathermap.org/img/w/" + response.list[1].weather[0].icon + ".png'>");
            $("#oneIcon").append(oneIcon);
            let twoIcon = ("<img src='http://openweathermap.org/img/w/" + response.list[2].weather[0].icon + ".png'>");
            $("#twoIcon").append(twoIcon);
            let threeIcon = ("<img src='http://openweathermap.org/img/w/" + response.list[3].weather[0].icon + ".png'>");
            $("#threeIcon").append(threeIcon);
            let fourIcon = ("<img src='http://openweathermap.org/img/w/" + response.list[4].weather[0].icon + ".png'>");
            $("#fourIcon").append(fourIcon);
            let fiveIcon = ("<img src='http://openweathermap.org/img/w/" + response.list[5].weather[0].icon + ".png'>");
            $("#fiveIcon").append(fiveIcon);





        });

}
$("#clearBtn").on("click", function () {
    localStorage.clear();
    location.reload();
});
