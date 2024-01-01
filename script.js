const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

let days = 8;
let hours = 23;
let minutes = 55;
let seconds = 45;

function countDown() {
  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;

    if (minutes < 0) {
      minutes = 59;
      hours--;

      if (hours < 0) {
        hours = 23;
        days--;

        if (days < 0) {
          days = 8;
          hours = 23;
          minutes = 55;
          seconds = 45;
        }
      }
    }
  }

  // Set leading zero
  let leadingDay = days < 10 ? "0" + days.toString() : days;
  let leadingHour = hours < 10 ? "0" + hours.toString() : hours;
  let leadingMinute = minutes < 10 ? "0" + minutes.toString() : minutes;
  let leadingSecond = seconds < 10 ? "0" + seconds.toString() : seconds;

  dayEl.innerText = leadingDay;
  hourEl.innerText = leadingHour;
  minuteEl.innerText = leadingMinute;
  secondEl.innerText = leadingSecond;
}

//Call the countdown
window.setInterval(countDown, 1000);
