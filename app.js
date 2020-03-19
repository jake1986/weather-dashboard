$(document).ready(function () {

    var searchBtn = $(".searchBtn");
    var newCity = $(".newCity");

    searchBtn.on("click", function (event) {
        event.preventDefault();
        var cityInput = $(".city-input").val();
        console.log(cityInput);
        var cityData = $(".city-data");
        cityData.text(cityInput);

        var newCity = $(".newCity");
        var cityInput = $(".city-input").val();
        var li = $("<li>").text(cityInput);
        newCity.append(li);
        // newCity.text(cityInput);


        localStorage.setItem("city-input", cityInput);
        localStorage.setItem("newCity", cityInput);
        var newCity = localStorage.getItem("city-input");


    });

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Richmond&appid=2c91858cdc5732c71063ad682162dea9"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var cityData = $(".city-data");
        cityData.text(response.name);
        var iconcode = response.weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        var sideIcon = $(".sideIcon").attr("src", iconurl);
        sideIcon.append(iconurl);
        var temp = $(".temp").text("Temperature: " + response.main.temp);
        cityData.append(temp, humid, windSpeed);
        var humid = $(".humidity").text("Humidty: " + response.main.humidity);
        var windSpeed = $(".wind-speed").text("Wind Speed: " + response.wind.speed);
        
    });

    // var cities = "Richmond";

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=Richmond&appid=2c91858cdc5732c71063ad682162dea9";

    $.ajax({
        url: queryURL,
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
                var cardBody = $("<div>").addClass("card-body");
                // cardBody.attr("width", "20%");
                var cardTitle = $("<h5>").addClass("card-title");
                var temp = $("<p>").addClass("temp").text("Temperature: " + response.list[i].main.temp);
                var humid = $("<p>").addClass("humid").text("Humidity: " + response.list[i].main.humidity);
                var iconcode = response.list[i].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                var weather = $("<img>").addClass("weather").attr("src", iconurl);
                cardTitle.text(response.list[i].dt_txt);
                var pOne = $("<p>").addClass("card-text"); 
                cardBody.append(cardTitle, pOne, weather, temp, humid);
                card.append(cardBody);
                forecast5.append(card);
                forecast5.append(row);
                forecast5.append(column);
            }
            
        }

      


        
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





