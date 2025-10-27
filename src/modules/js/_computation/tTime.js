import { inputElements } from "../input.js";
import { completionTime } from "./cTime.js";
// ====================== TURNAROUND TIME ======================
export function turnaroundTime(){
    const { arrT, arrTA } = inputElements();
    const turnaroundResult = [];
    let tat = 0;

    for (let tat_i = 0; tat_i < arrT.length; tat_i++) {
        tat = completionTime()[tat_i] - arrTA[tat_i];
        turnaroundResult.push(tat);
    }
    return turnaroundResult;
};