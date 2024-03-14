// Importing necessary libraries for making HTTP requests and parsing JSON data
const axios = require('axios');

// API key for authentication
const XI_API_KEY = "5beeadfd2904216457698633d294e790";

// URL for the API endpoint
const url = "https://api.elevenlabs.io/v1/voices";

// Setting up headers for the HTTP request
const headers = {
  "Accept": "application/json",
  "xi-api-key": XI_API_KEY,
  "Content-Type": "application/json"
};

// Making a GET request to the API endpoint
axios.get(url, { headers })
  .then(response => {
    // Parsing the JSON response into a JavaScript object
    const data = response.data;

    // Iterating over each 'voice' in the 'voices' list
    data.voices.forEach(voice => {
      // Printing out 'name' and 'voice_id' for each 'voice'
      console.log(`${voice.name}; ${voice.voice_id}`);
    });
  })
  .catch(error => {
    // Handling errors, if any
    console.error("Error:", error.message);
  });
