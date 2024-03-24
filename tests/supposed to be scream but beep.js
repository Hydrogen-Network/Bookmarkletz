// Create an AudioContext
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Function to generate a screaming sound
function generateScreamAudio() {
  const duration = 1; // in seconds
  const sampleRate = audioContext.sampleRate;
  const bufferSize = sampleRate * duration;
  const buffer = audioContext.createBuffer(1, bufferSize, sampleRate);
  const channelData = buffer.getChannelData(0);

  // Generate the screaming sound
  const frequency = 1000;
  const amplitude = 0.5;
  const screamDuration = 0.1;
  const screamInterval = 0.2;

  let screamIndex = 0;
  let time = 0;

  while (time < duration) {
    const screamStartTime = screamIndex * screamInterval;
    const screamEndTime = screamStartTime + screamDuration;

    if (time >= screamStartTime && time < screamEndTime) {
      const screamProgress = (time - screamStartTime) / screamDuration;
      const screamAmplitude = amplitude * (1 - screamProgress);

      channelData[Math.floor(time * sampleRate)] = Math.sin(2 * Math.PI * frequency * time) * screamAmplitude;

      time += 1 / sampleRate;
    } else {
      time += screamInterval;
      screamIndex++;
    }
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

// Generate and play the screaming sound
const screamBuffer = generateScreamAudio();
playAudio(screamBuffer);
