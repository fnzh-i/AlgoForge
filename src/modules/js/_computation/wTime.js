import { inputElements } from "../input.js";
import { turnaroundTime } from "./tTime.js";
// ====================== WAITING TIME ======================
export function waitingTime(){
    const { burT, burTA } = inputElements();
    const waitingResult = [];
    let wt = 0;

    for (let wt_i = 0; wt_i < burT.length; wt_i++) {
        wt = turnaroundTime()[wt_i] - burTA[wt_i];
        waitingResult.push(wt);
    }
    return waitingResult;
};