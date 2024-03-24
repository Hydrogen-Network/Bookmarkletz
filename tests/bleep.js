// Create an AudioContext
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Function to generate a screaming sound
function generateScreamBuffer() {
  const duration = 1; // in seconds
  const sampleRate = audioContext.sampleRate;
  const bufferSize = sampleRate * duration;
  const buffer = audioContext.createBuffer(1, bufferSize, sampleRate);
  const channelData = buffer.getChannelData(0);

  // Generate the screaming sound
  const frequency = 1000;
  const amplitude = 0.5;

  for (let i = 0; i < bufferSize; i++) {
    channelData[i] = Math.sin(2 * Math.PI * frequency * (i / sampleRate)) * amplitude;
  }

  return buffer;
}

// Function to play the generated audio
function playAudio(buffer) {
  const source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.connect(audioContext.destination);
  source.start();
}

// Function to generate speech and scream
function generateSpeechAndScream(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);

  return new Promise((resolve, reject) => {
    // Generate speech
    synth.speak(utterance);

    utterance.onend = () => {
      // Generate scream after speech ends
      const screamBuffer = generateScreamBuffer();
      resolve(screamBuffer);
    };

    utterance.onerror = (error) => {
      reject(error);
    };
  });
}

// Usage example
const textToScream = "WARNING!!! THIS HAS A BLEEPING SOUND!!!!";
generateSpeechAndScream(textToScream)
  .then((screamBuffer) => {
    playAudio(screamBuffer);
  })
  .catch((error) => {
    console.error("Error generating speech and scream:", error);
  });
