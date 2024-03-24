javascript:(function(){
  // Function to generate a random sound
  function generateRandomSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const duration = 1; // in seconds
    const sampleRate = audioContext.sampleRate;
    const bufferSize = sampleRate * duration;
    const buffer = audioContext.createBuffer(1, bufferSize, sampleRate);
    const channelData = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      channelData[i] = Math.random() * 2 - 1;
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

  // Generate and play random sound
  const randomSoundBuffer = generateRandomSound();
  playAudio(randomSoundBuffer);
})();
