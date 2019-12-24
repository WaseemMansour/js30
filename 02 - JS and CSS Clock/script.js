const secondsArm = document.getElementsByClassName('second-hand')[0];
const minutesArm = document.getElementsByClassName('min-hand')[0];
const hoursArm = document.getElementsByClassName('hour-hand')[0];

const secondsRotateDeg = 6;
const minutesRotateDeg = 6 / 60;
const hoursRotateDeg = 6 / 720;

const time = new Date();
const seconds = time.getSeconds();
const minutes = time.getMinutes();
const hours = time.getHours();

var secondsDegree = getDegree(seconds);
var minutesDegree = getDegree(minutes);
var hoursDegree = getDegree(hours, 12, (minutes/60)*30);
console.log(hoursDegree)
function getDegree(timeUnit, divisor = 60, hourPercent = 0) {
    return ((timeUnit / divisor) * 360) + 90 + hourPercent;
}

function setupClock() {
    secondsDegree = setDegree(secondsDegree, secondsRotateDeg, secondsArm);
    minutesDegree = setDegree(minutesDegree, minutesRotateDeg, minutesArm);
    hoursDegree = setDegree(hoursDegree, hoursRotateDeg, hoursArm);
}

function setDegree(currentDeg, rotateDeg, El) {
    var newDeg = currentDeg + rotateDeg;
    El.style.transform = `rotate(${newDeg}deg)`;
    currentDeg = newDeg;
    return currentDeg;
}

setInterval(setupClock, 1000);
