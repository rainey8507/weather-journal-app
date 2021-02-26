  
// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

const bodyParser = require('body-parser');
const port = 3000;

// To spin-up the server
const server = app.listen(port, listening);
function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
};

app.get('/add', sendData);
function sendData (req, res) {
    res.send(projectData);
};

/*app.post('/all', function (req, res) {
    res.send(projectData);
});*/

// POST route 
app.post('/addWeather', postData);
function postData(req, res) {
    console.log(req.body);
    projectData = req.body;
}
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server