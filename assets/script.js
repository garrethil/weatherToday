var formEl = $('#searchForm');
var inputText = $('#inputText');
var dayTitle = $('.dayTitle');
var city = $('.city');
var temp = $('.temp');
var windSpeed = $('.windSpeed');
var humidity = $('.humidity');
var weatherIcon = $('.icon');
var date = $('.date');
var day1 = $('#day1');
var day2 = $('#day2');
var day3 = $('#day3');
var day4 = $('#day4');
var day5 = $('#day5');
var apiKey = 'b2783bbf1219f33d7587949eaf4936eb'
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
var weekForcastUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric";
const currentDate = dayjs();


function searchFormSubmit (event){
    event.preventDefault();


    getWeather();
}

// get saved values from local storage for previous locations



// Store value in a key value to be stored in local storage

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
    






}


// create elements to display the weather information


var checkTime = function() {

date.html(currentDate.format('dddd, MMMM D, YYYY'));

const day1Name = currentDate.add(1, 'day');
const day2Name = currentDate.add(2, 'day');
const day3Name = currentDate.add(3, 'day');
const day4Name = currentDate.add(4, 'day');
const day5Name = currentDate.add(5, 'day');

day1.html(day1Name.format('ddd'));
day2.html(day2Name.format('ddd'));
day3.html(day3Name.format('ddd'));
day4.html(day4Name.format('ddd'));
day5.html(day5Name.format('ddd'));

}



checkTime();



formEl.on('click', searchFormSubmit);