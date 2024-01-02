var formEl = $('#searchForm');
var inputText = $('#inputText');
var dayTitle = $('.dayTitle');
var city = $('.city');
var temp = $('.temp');
var windSpeed = $('.windSpeed');
var humidity = $('.humidity');
var weatherIcon = $('.icon');
var apiKey = 'b2783bbf1219f33d7587949eaf4936eb'
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
var weekForcastUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric";

function searchFormSubmit (event){
    event.preventDefault();


    getWeather();
}

// get saved values from local storage for previous locations



// Store value in a key value to be stored in local storage


// use fetch() to get info from the Open weather API
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
    }
    
    console.log(weekForcastReturn);
}


// create elements to display the weather information






formEl.on('click', searchFormSubmit);