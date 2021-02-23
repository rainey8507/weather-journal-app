/* Global Variables */
const baseURL ='api.openweathermap.org/data/2.5/weather?q=Oklahoma';
const apiKey = '&appid=&appid=11117c86cac480a49daa024a4498118d'

const date = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();