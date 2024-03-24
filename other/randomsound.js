javascript:(function() {
  // Create an AudioContext
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();

  // Function to generate a random tone
  function generateRandomTone() {
    const duration = 1; // in seconds
    const frequency = Math.random() * 2000 + 200; // random frequency between 200 and 2200 Hz

    // Create an OscillatorNode
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine'; // you can experiment with other oscillator types like 'sawtooth', 'square', or 'triangle'
    oscillator.frequency.value = frequency;

    // Create a GainNode for controlling the volume
    const gainNode = audioContext.createGain();
    gainNode.gain.value = 0.5; // adjust the volume here

    // Connect the nodes
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Start the oscillator
    oscillator.start();

    // Stop the oscillator after the specified duration
    setTimeout(() => {
      oscillator.stop();
    }, duration * 1000);
  }

  // Generate a random tone
  generateRandomTone();
})();
