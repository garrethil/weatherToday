var formEl = $('#searchForm');
var inputText = $('#inputText');
var dayTitle = $('.dayTitle');
var city = $('.city');
var temp = $('.temp');
var windSpeed = $('.windSpeed');
var humidity = $('.humidity');
var weatherIcon = $('.icon');
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=b2783bbf1219f33d7587949eaf4936eb";

function searchFormSubmit (event){
    event.preventDefault();


    getWeather();
}

// get saved values from local storage for previous locations



// Store value in a key value to be stored in local storage


// use fetch() to get info from the Open weather API
async function getWeather() {
    const location = $.trim(inputText.val());
    const infoCall = await fetch(apiUrl + `&q=${location}`);
    var infoReturn = await infoCall.json();

    city.html(infoReturn.name);
    temp.html(Math.round(infoReturn.main.temp) + '°C');
    windSpeed.html(Number(infoReturn.wind.speed.toFixed(1)) + ' km/h');
    humidity.html(infoReturn.main.humidity + ' % humidity');

    if (infoReturn.weather[0].main == 'Clouds') {
        weatherIcon.src = "images/clouds.png";
    }else if (infoReturn.weather[0].main == 'Clear') {
        weatherIcon.src = "images/clear.png";
    }else if (infoReturn.weather[0].main == 'Rain') {
        weatherIcon.src = "images/rain.png";
    }else if (infoReturn.weather[0].main == 'Drizzle') {
        weatherIcon.src = "images/drizzle.png";
    }else if (infoReturn.weather[0].main == 'Mist') {
        weatherIcon.src = "images/mist.png";
    }else if (infoReturn.weather[0].main == 'Snow') {
        weatherIcon.src = "images/snow.png";
    }
    
    console.log(infoReturn);

}


// create elements to display the weather information






formEl.on('click', searchFormSubmit);