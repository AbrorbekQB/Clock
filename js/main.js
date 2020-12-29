var elHourHand = document.querySelector(".hour-hand");
var elMinHand = document.querySelector(".min-hand");
var elSecondsHand = document.querySelector(".seconds-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds/60)*360)+90;
  elSecondsHand.style.transform = "rotate("+secondsDegrees+"deg)";

  const min = now.getMinutes();
  const minDegrees = ((min / 60) * 360) + 90;
  elMinHand.style.transform = "rotate(" + minDegrees + "deg)";

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + 90;
  elHourHand.style.transform = "rotate(" + hourDegrees + "deg)";
};

setInterval (setDate, 1000);