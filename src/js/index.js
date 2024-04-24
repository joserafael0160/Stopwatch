"use strict";
import "./../style/style.css";
import { changeIcon, getTimeInNum, getStr } from "./functions.js";
import { resetBtn, startPauseBtn, time } from "./constants.js";

let active = false;
let actualTime = getTimeInNum(time);
let intervalId;
function calculate() {
  actualTime[2]++;
  if (actualTime[2] > 59) {
    actualTime[1]++;
    actualTime[2] = 0;
  }
  if (actualTime[1] > 59) {
    actualTime[0]++;
    actualTime[1] = 0;
  }
  time.innerHTML = `${getStr(actualTime[0])}:${getStr(actualTime[1])}:${getStr(actualTime[2])}`;
}

startPauseBtn.addEventListener("click", () => {
  if (active) {
    clearInterval(intervalId);
  } else {
    intervalId = setInterval(calculate, 1000);
  }

  changeIcon(active);
  active ? active = false : active = true;
});

resetBtn.addEventListener("click", () => {
  active = false;
  changeIcon(true);
  time.innerHTML = "00:00:00";
  actualTime = [0, 0, 0];
  clearInterval(intervalId);
});
