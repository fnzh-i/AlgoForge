import { completionTime } from "./cTime.js";
// ====================== TURNAROUND TIME ======================
export function turnaroundTime(combinedList){
    const completion = completionTime(combinedList);
    const turnaroundResult = [];

    for (let tat_i = 0; tat_i < combinedList.length; tat_i++) {
        const tat = completion[tat_i] - combinedList[tat_i].arrivalTime;
        turnaroundResult.push(tat);
    }
    return turnaroundResult;
};