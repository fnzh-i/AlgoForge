export function turnaroundTime(){
        const turnaroundResult = [];
        let tat = 0;

        for (let tat_i = 0; tat_i < arrT.length; tat_i++) {
        tat = completionTime()[tat_i] - arrTA[tat_i];

        turnaroundResult.push(tat);
        }
    return turnaroundResult;
    };