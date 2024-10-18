const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

setInterval(() => {
  const time = new Date();

  console.log(time);

  hour.innerText = time.getHours();
  minute.innerText = time.getMinutes();

  if (time.getSeconds() < 10) {
    second.innerText = "0" + time.getSeconds();
  } else {
    second.innerText = time.getSeconds();
  }
}, 1000);
