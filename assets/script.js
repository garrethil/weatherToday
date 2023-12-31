var formEl = $('#searchForm');
var inputText = $('#inputText');
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

    console.log(infoReturn);
}


// create elements to display the weather information





formEl.on('click', searchFormSubmit);