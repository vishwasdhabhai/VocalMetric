
const { Deepgram } = require("@deepgram/sdk");
const axios = require('axios');
const deepgram = new Deepgram(process.env.DEEPGRAM_API_KEY);
const elevenLabs = require('elevenlabs-js');
const fs = require("fs");

// const XI_API_KEY = "e254119550e28a3d7622e03fe109a7cb";
// const VOICE_ID = "21m00Tcm4TlvDq8ikWAM";
// const tts_url = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}/stream`;
elevenLabs.setApiKey('756f3f3df7d7f0c60a9692da01f62908');



export default async function handler(req, res) {
  try {
    const { results } = await deepgram.transcription.preRecorded(
      {
        buffer: Buffer.from(req.body, "base64"),
        mimetype: "audio/mpeg",
      },
      { punctuate: true, numerals: true, ner: true, diarize: true }
    );
    const transcriptionvo = results.channels[0].alternatives[0].transcript

    // const headers = {
    //   "Accept": "application/json",
    //   "xi-api-key": XI_API_KEY,
    //   "Content-Type": "application/json"
    // };
    
    // // Data to be sent with the request
    // const data = {
    //   "text": transcriptionvo,
    //   "model_id": "eleven_multilingual_v2",
    //   "voice_settings": {
    //     "stability": 0.5,
    //     "similarity_boost": 0.8,
    //     "style": 0.0,
    //     "use_speaker_boost": true
    //   }
    // };
    elevenLabs.textToSpeech("21m00Tcm4TlvDq8ikWAM", transcriptionvo, "eleven_multilingual_v2", {
      stability: 0.5,
      similarity_boost: 0.8,
      style: 0.0,
      use_speaker_boost: true
  }).then(async (res) => {
      // You can save the file
      await res.saveFile("public/test.mp3")
  
      // Or get the pipe and do whatever you want with it (like streaming it to the client)
      // const pipe = await res.pipe;
      // pipe(fs.createWriteStream("test-with-pipe.mp3"));
  });
      
    res.status(200).json({ body: JSON.stringify(results)});
  } catch (err) {
    res.status(500).json({ body: String(err) });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "5mb",
    },
  },
};
