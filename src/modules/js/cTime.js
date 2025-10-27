export function completionTime(){
        const completionResult = [];
        let sum = 0;
        
        for (let ct_i = 0; ct_i < burT.length; ct_i++) {
        sum += burTA[ct_i];
        
        completionResult.push(sum);
        }
    return completionResult;
    };