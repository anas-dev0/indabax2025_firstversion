const end_teller= document.querySelector(".end_teller")
const ahCountdown = () => {
  const countDate = new Date("May 3, 2025 17:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  if (gap < 0) {
    document.getElementById("ah-days").innerText = "00";
    document.getElementById("ah-hours").innerText = "00";
    document.getElementById("ah-minutes").innerText = "00";
    document.getElementById("ah-seconds").innerText = "00";
    const DateNow=new Date()
    let month=DateNow.getMonth()
    let year =DateNow.getFullYear()
    let x
    if(month<4){
      x=year
    }
    else{
      x=year+1
    }
    end_teller.innerText="See you at IndabaX"+" "+x
    clearInterval(intervalId); // Use the interval ID here
    return;
  }

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.getElementById("ah-days").innerText = textDay < 10 ? `0${textDay}` : textDay;
  document.getElementById("ah-hours").innerText = textHour < 10 ? `0${textHour}` : textHour;
  document.getElementById("ah-minutes").innerText = textMinute < 10 ? `0${textMinute}` : textMinute;
  document.getElementById("ah-seconds").innerText = textSecond < 10 ? `0${textSecond}` : textSecond;
};

const intervalId = setInterval(ahCountdown, 1000);
