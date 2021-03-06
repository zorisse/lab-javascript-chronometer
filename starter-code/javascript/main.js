var chronometer = new Chronometer(0, null);
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
// Splits

var splits = document.getElementById("splits");
//

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  var printMin = chronometer.twoDigitsNumber(chronometer.setMinutes());

  minUni.innerHTML = printMin[1];
  minDec.innerHTML = printMin[0];
}

function printSeconds() {
  var printSec = chronometer.twoDigitsNumber(chronometer.setSeconds());

  secDec.innerHTML = printSec[0];
  secUni.innerHTML = printSec[1];
}

function printMilliseconds() {
  var printmil = chronometer.twoDigitsNumber(chronometer.setMilliseconds());

  milDec.innerHTML = printmil[0];
  milUni.innerHTML = printmil[1];
}

function printSplit() {
  var split = document.createElement("li");
  split.innerHTML = `${chronometer.twoDigitsNumber(
    chronometer.setMinutes()
  )}:${chronometer.twoDigitsNumber(
    chronometer.setSeconds()
  )}:${chronometer.twoDigitsNumber(chronometer.setMilliseconds())}`;
  splits.appendChild(split);
}

function clearSplits() {}

function setStopBtn() {
  chronometer.stopClick();
  chronometer.intervalId = null;
}

function setSplitBtn() {}

function setStartBtn() {
  // lancer le chrono sur l'instance
  chronometer.startClick();
  setInterval(printTime, 10);
}
// setInterval(printMilliseconds, 1);

function setResetBtn() {
  chronometer.resetClick();
  splits.innerHTML = "";
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  console.log(chronometer.intervalId);
  if (chronometer.intervalId === null) {
    setStartBtn();
    btnLeft.setAttribute("class", "btn stop");
    btnLeft.innerHTML = "STOP";
    btnRight.setAttribute("class", "btn split");
    btnRight.innerHTML = "SPLIT";
  } else if (chronometer.currentTime !== null) {
    setStopBtn();
    btnLeft.setAttribute("class", "btn start");
    btnLeft.innerHTML = "START";
    btnRight.setAttribute("class", "btn reset");
    btnRight.innerHTML = "RESET";
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (chronometer.intervalId === null) {
    setResetBtn();
    printTime();
  } else if (chronometer.intervalId !== null) {
    printSplit();
  }
});
