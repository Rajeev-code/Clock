function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert 24-hour format to 12-hour format
  hours = hours % 12 || 12;

  // Add leading zeros
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Set values in HTML
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;
  document.getElementById('ampm').innerText = ampm;

  // Update wall clock hands
  let hourRotation = (hours % 12) * 30 + minutes * 0.5;
  let minuteRotation = minutes * 6;
  let secondRotation = seconds * 6;

  document.querySelector('.hour-hand').style.transform = `rotate(${hourRotation}deg)`;
  document.querySelector('.minute-hand').style.transform = `rotate(${minuteRotation}deg)`;
  document.querySelector('.second-hand').style.transform = `rotate(${secondRotation}deg)`;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize clock immediately
updateClock();
