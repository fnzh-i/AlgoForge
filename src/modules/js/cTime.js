import { inputElements } from "./input.js";
// ====================== COMPLETION TIME ======================
export function completionTime(){
    const { arrTA, burT, burTA } = inputElements();
    const completionResult = [];
    let sum = arrTA[0];
    
    for (let ct_i = 0; ct_i < burT.length; ct_i++) {
        sum += burTA[ct_i];
        completionResult.push(sum);
    }
    return completionResult;
}