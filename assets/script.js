var formEl = $('#searchForm');
var pastSearches = $('#searchHistory');
var addedLines = $('.pastSearch');
var inputText = $('#inputText');
var clearBtn = $('#clearBtn');
var dayTitle = $('.dayTitle');
var city = $('.city');
var temp = $('.temp');
var windSpeed = $('.windSpeed');
var humidity = $('.humidity');
var weatherIcon = $('.icon');
var date = $('.date');
var apiKey = 'b2783bbf1219f33d7587949eaf4936eb';
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
var weekForcastUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric";

var days = [$('#day1'), $('#day2'), $('#day3'), $('#day4'), $('#day5')];
var icons = [$('#1Icon'), $('#2Icon'), $('#3Icon'), $('#4Icon'), $('#5Icon')];
var temps = [$('.temp1'), $('.temp2'), $('.temp3'), $('.temp4'), $('.temp5')];
var windSpeeds = [$('.windSpeed1'), $('.windSpeed2'), $('.windSpeed3'), $('.windSpeed4'), $('.windSpeed5')];
var humidities = [$('.humidity1'), $('.humidity2'), $('.humidity3'), $('.humidity4'), $('.humidity5')];
var clickedLocation = [];

function searchFormSubmit (event){
    event.preventDefault();

  // Create an object with the form data
  var searchData = $.trim(inputText.val());

  // Retrieve the existing form data array from localStorage
  var searchDataArray = JSON.parse(localStorage.getItem("searchedData")) || [];

if (searchDataArray.includes(searchData)){
    getWeather();
}else {
    searchDataArray.push(searchData);

  // Store the updated form data array in localStorage
  localStorage.setItem("searchedData", JSON.stringify(searchDataArray));


var searchDataArray = JSON.parse(localStorage.getItem("searchedData"));


    getWeather();
    getSavedLocations();
};

  
}

pastSearches.on("click", ".pastSearch", function () {
    clickedLocation.length = 0; 
    var textEl = $(this).text();
    clickedLocation.push(textEl);
    pastWeather();
  });

  var pastWeather = async function () {
    const location = clickedLocation[0];

    const infoCall = await fetch(apiUrl + `&q=${location}` + `&appid=${apiKey}`);
    var infoReturn = await infoCall.json();
    const weekForcastCall = await fetch(weekForcastUrl + `&q=${location}` + `&appid=${apiKey}`);
    var weekForcastReturn = await weekForcastCall.json();

    city.html(infoReturn.name);
    temp.html(Math.round(infoReturn.main.temp) + '°C');
    windSpeed.html(Number(infoReturn.wind.speed.toFixed(1)) + ' km/h');
    humidity.html(infoReturn.main.humidity + ' % humidity');

    for (var i = 0; i < temps.length; i++) {
        temps[i].html(Math.round(weekForcastReturn.list[i].main.temp) + '°C');
    };

    for (var i = 0; i < windSpeeds.length; i++) {
        windSpeeds[i].html(Number(weekForcastReturn.list[i].wind.speed.toFixed(1)) + ' km/h');
    };

    for (var i = 0; i < humidities.length; i++) {
        humidities[i].html('humidity ' + weekForcastReturn.list[i].main.humidity + '%');
    };

    if (infoReturn.weather[0].main == 'Clouds') {
        weatherIcon.attr('src', './assets/images/clouds.png');
    }else if (infoReturn.weather[0].main == 'Clear') {
        weatherIcon.attr('src', './assets/images/clear.png');
    }else if (infoReturn.weather[0].main == 'Rain') {
        weatherIcon.attr('src', './assets/images/rain.png');
    }else if (infoReturn.weather[0].main == 'Drizzle') {
        weatherIcon.attr('src', './assets/images/drizzle.png');
    }else if (infoReturn.weather[0].main == 'Mist') {
        weatherIcon.attr('src', './assets/images/mist.png');
    }else if (infoReturn.weather[0].main == 'Snow') {
        weatherIcon.attr('src', './assets/images/snow.png');
    };

    for (var i = 0; i < icons.length; i++) {
       
       
        if (weekForcastReturn.list[i].weather[0].main == 'Clouds') {
            icons[i].attr('src', './assets/images/clouds.png');
        }else if (weekForcastReturn.list[i].weather[0].main == 'Clear') {
            icons[i].attr('src', './assets/images/clear.png');
        }else if (weekForcastReturn.list[i].weather[0].main == 'Rain') {
            icons[i].attr('src', './assets/images/rain.png');
        }else if (weekForcastReturn.list[i].weather[0].main == 'Drizzle') {
            icons[i].attr('src', './assets/images/drizzle.png');
        }else if (weekForcastReturn.list[i].weather[0].main == 'Mist') {
            icons[i].attr('src', './assets/images/mist.png');
        }else if (weekForcastReturn.list[i].weather[0].main == 'Snow') {
            icons[i].attr('src', './assets/images/snow.png');
        }
    };
  }


// get saved values from local storage for previous locations
var getSavedLocations = function() {
    var searchDataArray = JSON.parse(localStorage.getItem("searchedData"));
if (searchDataArray) {
    pastSearches.empty();
    for (var i = 0; i < searchDataArray.length; i++) {
       var line = $("<p>");
       line.addClass('pastSearch');
        line.text(searchDataArray[i]);
        pastSearches.append(line);
    };
}else {
    loadWeather();
} };


var clearHistory = function(){
    localStorage.removeItem("searchedData");
    location.reload();
}


async function loadWeather() {
    const location = 'Berlin';

    const infoCall = await fetch(apiUrl + `&q=${location}` + `&appid=${apiKey}`);
    var infoReturn = await infoCall.json();
    const weekForcastCall = await fetch(weekForcastUrl + `&q=${location}` + `&appid=${apiKey}`);
    var weekForcastReturn = await weekForcastCall.json();

    city.html(infoReturn.name);
    temp.html(Math.round(infoReturn.main.temp) + '°C');
    windSpeed.html(Number(infoReturn.wind.speed.toFixed(1)) + ' km/h');
    humidity.html(infoReturn.main.humidity + ' % humidity');

    for (var i = 0; i < temps.length; i++) {
        temps[i].html(Math.round(weekForcastReturn.list[i].main.temp) + '°C');
    };

    for (var i = 0; i < windSpeeds.length; i++) {
        windSpeeds[i].html(Number(weekForcastReturn.list[i].wind.speed.toFixed(1)) + ' km/h');
    };

    for (var i = 0; i < humidities.length; i++) {
        humidities[i].html('humidity ' + weekForcastReturn.list[i].main.humidity + '%');
    };

    if (infoReturn.weather[0].main == 'Clouds') {
        weatherIcon.attr('src', './assets/images/clouds.png');
    }else if (infoReturn.weather[0].main == 'Clear') {
        weatherIcon.attr('src', './assets/images/clear.png');
    }else if (infoReturn.weather[0].main == 'Rain') {
        weatherIcon.attr('src', './assets/images/rain.png');
    }else if (infoReturn.weather[0].main == 'Drizzle') {
        weatherIcon.attr('src', './assets/images/drizzle.png');
    }else if (infoReturn.weather[0].main == 'Mist') {
        weatherIcon.attr('src', './assets/images/mist.png');
    }else if (infoReturn.weather[0].main == 'Snow') {
        weatherIcon.attr('src', './assets/images/snow.png');
    };

    for (var i = 0; i < icons.length; i++) {
       
       
        if (weekForcastReturn.list[i].weather[0].main == 'Clouds') {
            icons[i].attr('src', './assets/images/clouds.png');
        }else if (weekForcastReturn.list[i].weather[0].main == 'Clear') {
            icons[i].attr('src', './assets/images/clear.png');
        }else if (weekForcastReturn.list[i].weather[0].main == 'Rain') {
            icons[i].attr('src', './assets/images/rain.png');
        }else if (weekForcastReturn.list[i].weather[0].main == 'Drizzle') {
            icons[i].attr('src', './assets/images/drizzle.png');
        }else if (weekForcastReturn.list[i].weather[0].main == 'Mist') {
            icons[i].attr('src', './assets/images/mist.png');
        }else if (weekForcastReturn.list[i].weather[0].main == 'Snow') {
            icons[i].attr('src', './assets/images/snow.png');
        }
    };
}


async function getWeather() {
    const location = $.trim(inputText.val());

    const infoCall = await fetch(apiUrl + `&q=${location}` + `&appid=${apiKey}`);
    var infoReturn = await infoCall.json();
    const weekForcastCall = await fetch(weekForcastUrl + `&q=${location}` + `&appid=${apiKey}`);
    var weekForcastReturn = await weekForcastCall.json();

    city.html(infoReturn.name);
    temp.html(Math.round(infoReturn.main.temp) + '°C');
    windSpeed.html(Number(infoReturn.wind.speed.toFixed(1)) + ' km/h');
    humidity.html(infoReturn.main.humidity + ' % humidity');

    for (var i = 0; i < temps.length; i++) {
        temps[i].html(Math.round(weekForcastReturn.list[i].main.temp) + '°C');
    };

    for (var i = 0; i < windSpeeds.length; i++) {
        windSpeeds[i].html(Number(weekForcastReturn.list[i].wind.speed.toFixed(1)) + ' km/h');
    };

    for (var i = 0; i < humidities.length; i++) {
        humidities[i].html('humidity ' + weekForcastReturn.list[i].main.humidity + '%');
    };

    if (infoReturn.weather[0].main == 'Clouds') {
        weatherIcon.attr('src', './assets/images/clouds.png');
    }else if (infoReturn.weather[0].main == 'Clear') {
        weatherIcon.attr('src', './assets/images/clear.png');
    }else if (infoReturn.weather[0].main == 'Rain') {
        weatherIcon.attr('src', './assets/images/rain.png');
    }else if (infoReturn.weather[0].main == 'Drizzle') {
        weatherIcon.attr('src', './assets/images/drizzle.png');
    }else if (infoReturn.weather[0].main == 'Mist') {
        weatherIcon.attr('src', './assets/images/mist.png');
    }else if (infoReturn.weather[0].main == 'Snow') {
        weatherIcon.attr('src', './assets/images/snow.png');
    };

    for (var i = 0; i < icons.length; i++) {
       
       
        if (weekForcastReturn.list[i].weather[0].main == 'Clouds') {
            icons[i].attr('src', './assets/images/clouds.png');
        }else if (weekForcastReturn.list[i].weather[0].main == 'Clear') {
            icons[i].attr('src', './assets/images/clear.png');
        }else if (weekForcastReturn.list[i].weather[0].main == 'Rain') {
            icons[i].attr('src', './assets/images/rain.png');
        }else if (weekForcastReturn.list[i].weather[0].main == 'Drizzle') {
            icons[i].attr('src', './assets/images/drizzle.png');
        }else if (weekForcastReturn.list[i].weather[0].main == 'Mist') {
            icons[i].attr('src', './assets/images/mist.png');
        }else if (weekForcastReturn.list[i].weather[0].main == 'Snow') {
            icons[i].attr('src', './assets/images/snow.png');
        }
    };

    console.log(weekForcastReturn);

    inputText.val("");
}

var checkTime = function() {

    const currentDate = dayjs();

date.html(currentDate.format('dddd, MMMM D, YYYY'));

for (var i = 0; i < days.length; i++) {
    days[i].html(currentDate.add(i+1, 'day').format('ddd'))
};


};

checkTime();
loadWeather();
getSavedLocations();
clearBtn.on('click', clearHistory);

formEl.on('submit', searchFormSubmit);