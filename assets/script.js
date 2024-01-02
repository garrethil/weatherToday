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
var icon1 = $('#1Icon');
var icon2 = $('#2Icon');
var icon3 = $('#3Icon');
var icon4 = $('#4Icon');
var icon5 = $('#5Icon');
var apiKey = 'b2783bbf1219f33d7587949eaf4936eb';
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

    $('.temp1').html(Math.round(weekForcastReturn.list[0].main.temp) + '°C');
    $('.temp2').html(Math.round(weekForcastReturn.list[1].main.temp) + '°C');
    $('.temp3').html(Math.round(weekForcastReturn.list[2].main.temp) + '°C');
    $('.temp4').html(Math.round(weekForcastReturn.list[3].main.temp) + '°C');
    $('.temp5').html(Math.round(weekForcastReturn.list[4].main.temp) + '°C');

    $('.windSpeed1').html(Number(weekForcastReturn.list[0].wind.speed.toFixed(1)) + ' km/h');
    $('.windSpeed2').html(Number(weekForcastReturn.list[1].wind.speed.toFixed(1)) + ' km/h');
    $('.windSpeed3').html(Number(weekForcastReturn.list[2].wind.speed.toFixed(1)) + ' km/h');
    $('.windSpeed4').html(Number(weekForcastReturn.list[3].wind.speed.toFixed(1)) + ' km/h');
    $('.windSpeed5').html(Number(weekForcastReturn.list[4].wind.speed.toFixed(1)) + ' km/h');

    $('.humidity1').html('humidity ' + weekForcastReturn.list[0].main.humidity + '%');
    $('.humidity2').html('humidity ' + weekForcastReturn.list[1].main.humidity  + '%');
    $('.humidity3').html('humidity ' + weekForcastReturn.list[2].main.humidity  + '%');
    $('.humidity4').html('humidity ' + weekForcastReturn.list[3].main.humidity  + '%');
    $('.humidity5').html('humidity ' + weekForcastReturn.list[4].main.humidity  + '%');

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

    // 1

    if (weekForcastReturn.list[0].weather[0].main == 'Clouds') {
        icon1.attr('src', './assets/images/clouds.png');
    }else if (weekForcastReturn.list[0].weather[0].main == 'Clear') {
        icon1.attr('src', './assets/images/clear.png');
    }else if (weekForcastReturn.list[0].weather[0].main == 'Rain') {
        icon1.attr('src', './assets/images/rain.png');
    }else if (weekForcastReturn.list[0].weather[0].main == 'Drizzle') {
        icon1.attr('src', './assets/images/drizzle.png');
    }else if (weekForcastReturn.list[0].weather[0].main == 'Mist') {
        icon1.attr('src', './assets/images/mist.png');
    }else if (weekForcastReturn.list[0].weather[0].main == 'Snow') {
        icon1.attr('src', './assets/images/snow.png');
    }
    
// 2

    if (weekForcastReturn.list[1].weather[0].main == 'Clouds') {
        icon2.attr('src', './assets/images/clouds.png');
    }else if (weekForcastReturn.list[1].weather[0].main == 'Clear') {
        icon2.attr('src', './assets/images/clear.png');
    }else if (weekForcastReturn.list[1].weather[0].main == 'Rain') {
        icon2.attr('src', './assets/images/rain.png');
    }else if (weekForcastReturn.list[1].weather[0].main == 'Drizzle') {
        icon2.attr('src', './assets/images/drizzle.png');
    }else if (weekForcastReturn.list[1].weather[0].main == 'Mist') {
        icon2.attr('src', './assets/images/mist.png');
    }else if (weekForcastReturn.list[1].weather[0].main == 'Snow') {
        icon2.attr('src', './assets/images/snow.png');
    }

// 3

    if (weekForcastReturn.list[2].weather[0].main == 'Clouds') {
        icon3.attr('src', './assets/images/clouds.png');
    }else if (weekForcastReturn.list[2].weather[0].main == 'Clear') {
        icon3.attr('src', './assets/images/clear.png');
    }else if (weekForcastReturn.list[2].weather[0].main == 'Rain') {
        icon3.attr('src', './assets/images/rain.png');
    }else if (weekForcastReturn.list[2].weather[0].main == 'Drizzle') {
        icon3.attr('src', './assets/images/drizzle.png');
    }else if (weekForcastReturn.list[2].weather[0].main == 'Mist') {
        icon3.attr('src', './assets/images/mist.png');
    }else if (weekForcastReturn.list[2].weather[0].main == 'Snow') {
        icon3.attr('src', './assets/images/snow.png');
    }

    // 4

    if (weekForcastReturn.list[3].weather[0].main == 'Clouds') {
        icon4.attr('src', './assets/images/clouds.png');
    }else if (weekForcastReturn.list[3].weather[0].main == 'Clear') {
        icon4.attr('src', './assets/images/clear.png');
    }else if (weekForcastReturn.list[3].weather[0].main == 'Rain') {
        icon4.attr('src', './assets/images/rain.png');
    }else if (weekForcastReturn.list[3].weather[0].main == 'Drizzle') {
        icon4.attr('src', './assets/images/drizzle.png');
    }else if (weekForcastReturn.list[3].weather[0].main == 'Mist') {
        icon4.attr('src', './assets/images/mist.png');
    }else if (weekForcastReturn.list[3].weather[0].main == 'Snow') {
        icon4.attr('src', './assets/images/snow.png');
    }

    // 5

    if (weekForcastReturn.list[4].weather[0].main == 'Clouds') {
        icon5.attr('src', './assets/images/clouds.png');
    }else if (weekForcastReturn.list[4].weather[0].main == 'Clear') {
        icon5.attr('src', './assets/images/clear.png');
    }else if (weekForcastReturn.list[4].weather[0].main == 'Rain') {
        icon5.attr('src', './assets/images/rain.png');
    }else if (weekForcastReturn.list[4].weather[0].main == 'Drizzle') {
        icon5.attr('src', './assets/images/drizzle.png');
    }else if (weekForcastReturn.list[4].weather[0].main == 'Mist') {
        icon5.attr('src', './assets/images/mist.png');
    }else if (weekForcastReturn.list[4].weather[0].main == 'Snow') {
        icon5.attr('src', './assets/images/snow.png');
    }




console.log(weekForcastReturn);
console.log(weekForcastReturn.list[0].weather[0].main);

}


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