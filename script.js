// Cache DOM elements
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

// Pre-calculate time constants
const sec = 1000;
const min = sec * 60;
const hr = min * 60;
const day = hr * 24;

// Get and set the current and next year
const currentYear = new Date().getFullYear();
document.querySelector(".current").textContent = currentYear;

const nextYear = currentYear + 1;
document.querySelector(".next").textContent = nextYear;

function updateCountdown() {
  // Use timestamp to subtract dates: .getTime()

  const currentTime = new Date().getTime();
  const nextTime = new Date(`Jan 1, ${nextYear} 00:00:00`).getTime();
  const timeDiff = nextTime - currentTime;

  let remainderTime;

  const d = Math.floor(timeDiff / day);
  remainderTime = timeDiff % day;

  const h = Math.floor(remainderTime / hr);
  remainderTime %= hr;

  const m = Math.floor(remainderTime / min);
  remainderTime %= min;

  const s = Math.floor(remainderTime / sec);

  // update the DOM elements
  days.textContent = d;
  hours.textContent = h.toString().padStart(2, "0");
  minutes.textContent = m.toString().padStart(2, "0");
  seconds.textContent = s.toString().padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to display immediately
