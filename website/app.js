

/* Global Variables */
//const api =`api.openweathermap.org/data/2.5/weather?q=${location}&appid=11117c86cac480a49daa024a4498118d`;
//const zipCode = document.querySelector('#zip');
//const feelings = document.querySelector('#feelings');
const button = document.querySelector('#generate');

const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = '&appid=c286b5e1dc71e3539a598870ffa96c2e';
// Create a new date instance dynamically with JS
let d = new Date();
let todayDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Button Click 
document.getElementById('generate').addEventListener('click', getWeather);

function getWeather(e) {
    e.preventDefault();
    const feelings = document.getElementById('feelings').value;
    const zipCode = document.getElementById('zip').value;
    getWeatherData(baseURL, apiKey, zipCode).
    then(function(weatherData){
        const temp = weatherData.main.temp;
        const humidity = weatherData.main.humidity;
        const userFeel = feelings;
        postData('/add', {
            temp,
            humidity,
            userFeel
        }).then(() => {updateUI();})
    });
}

const  getWeatherData = async (baseURL, apiKey, zipCode) => {
    const res = await fetch(baseURL + apiKey + zipCode)
    try {
        const newWeatherData = await res.json();
        console.log(newWeatherData);
        return newWeatherData;
    } catch {
        console.log("error", error);
    }
}

// POST function to server

async function postData(url, data) {
    await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    });
}

// Update UI 
async function updateUI() {
    const res = await fetch('/add');
    const recentEntry = await res.json();
    document.querySelector("#date").innerHTML = todayDate;
    document.querySelector("#content").innerHTML = recentEntry.feelings;
    document.querySelector('#temp').innerHTML = Math.floor(recentEntry.temp) + "C";
}
/*fetch(api).then((response) => {
    return response.json();
}).catch((error) => {
    console.log(error);
})*/

//const date = document.getElementById('date');
//const temp = document.getElementById('temp');
//const content = document.getElementById('content');



