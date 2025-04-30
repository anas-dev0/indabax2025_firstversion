// Countdown Timer
const ahCountdown = () => {
  const countDate = new Date("May 4, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);
  
  document.getElementById("ah-days").innerText = textDay < 10 ? `0${textDay}` : textDay;
  document.getElementById("ah-hours").innerText = textHour < 10 ? `0${textHour}` : textHour;
  document.getElementById("ah-minutes").innerText = textMinute < 10 ? `0${textMinute}` : textMinute;
  document.getElementById("ah-seconds").innerText = textSecond < 10 ? `0${textSecond}` : textSecond;
};

setInterval(ahCountdown, 1000);