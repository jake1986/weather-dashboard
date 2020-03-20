$(document).ready(function () {

    // Change button to ID
    var searchBtn = $(".searchBtn");
    // var newCity = $(".newCity");

    searchBtn.on("click", function (event) {
        event.preventDefault();
        var cityInput = $(".city-input").val();
        console.log(cityInput);
        var cityData = $(".city-data");

        cityData.text(cityInput);

        var currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=2c91858cdc5732c71063ad682162dea9";

        $.ajax({
            url: currentQueryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            var cityData = $(".city-data");
            cityData.attr("style", "margin-left: 5px;");
            cityData.text(response.name);
            var iconcode = response.weather[0].icon;
            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            var sideIcon = $(".sideIcon").attr("src", iconurl);
            sideIcon.append(iconurl);
            var temp = $(".temp").attr("style", "margin-left: 5px;").text("Temperature: " + response.main.temp + " F");
            cityData.append(humid, windSpeed);
            var humid = $(".humidity").attr("style", "margin-left: 5px;").text("Humidty: " + response.main.humidity + " %");
            var windSpeed = $(".wind-speed").attr("style", "margin-left: 5px;").text("Wind Speed: " + response.wind.speed + " MPH");

        });

        var fiveDayQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&appid=2c91858cdc5732c71063ad682162dea9";

        $.ajax({
            url: fiveDayQueryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            var forecast5 = $(".container-footer");
            var row = $("<div class=\"row\">");
            forecast5.append(row);



            for (var i = 0; i < response.list.length; i++) {

                if (response.list[i].dt_txt.indexOf("18:00:00") !== -1) {


                    var column = $("<div class=\"col-md-2\">");
                    var card = $("<div>").addClass("card");
                    var cardBody = $("<div>").addClass("card-body").attr("style", "background: lightblue;")
                    // cardBody.attr("width", "20%");
                    var cardTitle = $("<h5>").addClass("card-title");
                    var temp = $("<p>").addClass("temp").text("Temperature: " + response.list[i].main.temp + " F");
                    var humid = $("<p>").addClass("humid").text("Humidity: " + response.list[i].main.humidity + " %");
                    var iconcode = response.list[i].weather[0].icon;
                    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                    var weather = $("<img>").addClass("weather").attr("src", iconurl);
                    var dateTime = response.list[i].dt_txt;
                    var dateTimeList = dateTime.split(' ');
                    var date = dateTimeList[0];
                    var splitDate = date.split('-');
                    var formattedDate = splitDate[1] + "/" + splitDate[2] + "/" + splitDate[0];
                    cardTitle.text(formattedDate);
                    var pOne = $("<p>").addClass("card-text");
                    cardBody.append(cardTitle, pOne, weather, temp, humid);
                    card.append(cardBody);
                    forecast5.append(card);
                    forecast5.append(row);
                    forecast5.append(column);
                }

            }





        });

        var newCity = $(".newCity");
        var cityInput = $(".city-input").val();
        var li = $("<li>").text(cityInput);
        newCity.append(li);
        // newCity.text(cityInput);


        localStorage.setItem("city-input", cityInput);
        localStorage.setItem("newCity", cityInput);
        var newCity = localStorage.getItem("city-input");




    });

    // var cityInput = $(".city-input").val();



    // var cities = "Richmond";



    // <div class="card" style="width: 18rem;">
    //     <div class="card-body">
    //         <h5 class="card-title">City</h5>
    //         <p class="card-text">hello world</p>
    //     </div>
    // </div>


    // localStorage.setItem("makeEvent-8", makeEvent8);
    // localStorage.setItem("printEvent-8", makeEvent8);
    // var makeEvent8 = localStorage.getItem("makeEvent-8");
    // console.log(makeEvent8);

});

    // <div class="card" style="width: 18rem;">
    //     <div class="card-body">
    //         <h5 class="card-title">City</h5>
    //         <p class="card-text">hello world</p>
    //     </div>
    // </div>


    // localStorage.setItem("makeEvent-8", makeEvent8);
    // localStorage.setItem("printEvent-8", makeEvent8);
    // var makeEvent8 = localStorage.getItem("makeEvent-8");
    // console.log(makeEvent8);





