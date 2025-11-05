// ====================== COMPLETION TIME ======================
export function completionTime(combinedList){
    const completionResult = [];
    let sum = 0;
    
    for (let ct_i = 0; ct_i < combinedList.length; ct_i++) {
        if (ct_i === 0 && combinedList[ct_i].arrivalTime > 0 ){
            sum = combinedList[ct_i].arrivalTime;
        }
        sum += combinedList[ct_i].burstTime;
        completionResult.push(sum);
    }
    return completionResult;
}