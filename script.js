// Set countdown to 7 days from the current time
const countdownDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;

function updateTimer() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance < 0) {
    document.querySelector(".countdown").innerHTML = "Expired";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, '0');
  document.getElementById("hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}

// Initial call
updateTimer();

// Update every second
setInterval(updateTimer, 1000);
