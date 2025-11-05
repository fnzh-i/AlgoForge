import { turnaroundTime } from "./tTime.js";
// ====================== WAITING TIME ======================
export function waitingTime(combinedList){
    const waiting = turnaroundTime(combinedList)
    const waitingResult = [];
    

    for (let wt_i = 0; wt_i < combinedList.length; wt_i++) {
        const wt = waiting[wt_i] - combinedList[wt_i].burstTime;
        waitingResult.push(wt);
    }
    return waitingResult;
};