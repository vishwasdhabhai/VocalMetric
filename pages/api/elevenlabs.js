const axios = require('axios');

// Constants for the API request
const XI_API_KEY = "e254119550e28a3d7622e03fe109a7cb";
const VOICE_ID = "21m00Tcm4TlvDq8ikWAM";
const TEXT_TO_SPEAK = "Hi this is Rachael from USA, I have done my bachelors in law from Columbia University. Thanks.";

// URL for the API endpoint
const tts_url = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}/stream`;

// Headers for the HTTP request
const headers = {
  "Accept": "application/json",
  "xi-api-key": XI_API_KEY,
  "Content-Type": "application/json"
};

// Data to be sent with the request
const data = {
  "text": TEXT_TO_SPEAK,
  "model_id": "eleven_multilingual_v2",
  "voice_settings": {
    "stability": 0.5,
    "similarity_boost": 0.8,
    "style": 0.0,
    "use_speaker_boost": true
  }
};

const playAudio = (audioStream) => {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const audioSource = audioContext.createMediaStreamSource(audioStream);

  audioSource.connect(audioContext.destination);
};

const getAudioStream = async () => {
  try {
    const response = await axios.post(tts_url, data, { headers });
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};

const elevenlabs = async () => {
    try {
        const audioStream = await getAudioStream();
        playAudio(audioStream);
      } catch (error) {
        console.error("Error in elevenlabs:", error.message);
        throw error;
      }
};

export default elevenlabs;
