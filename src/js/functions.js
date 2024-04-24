"use strict";

import { startPauseIco } from "./constants.js";

export function changeIcon(active) {
  if (!active) {
    startPauseIco.innerHTML = "<path fill='currentColor' transform='scale(0.67)' d='M2 6c0-1.886 0-2.828.586-3.414S4.114 2 6 2s2.828 0 3.414.586S10 4.114 10 6v12c0 1.886 0 2.828-.586 3.414S7.886 22 6 22s-2.828 0-3.414-.586S2 19.886 2 18zM14 6c0-1.886 0-2.828.586-3.414S16.114 2 18 2s2.828 0 3.414.586S22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18z'/>";
  } else {
    startPauseIco.innerHTML = "<path fill='currentColor' d='M2 2.5v11c0 1.5 1.27 1.492 1.27 1.492h.128c.247.004.489-.05.7-.172l9.797-5.597c.433-.243.656-.735.656-1.227s-.223-.984-.656-1.223L4.098 1.176a1.4 1.4 0 0 0-.7-.176H3.27S2 1 2 2.5m0 0'/>";
  }
}

export const getTimeInNum = time => (time.innerHTML.split(":")).map((num) => parseInt(num));

export const getStr = num => num.toString().padStart(2, "0");
