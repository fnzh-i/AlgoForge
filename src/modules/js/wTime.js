export function waitingTime(){
        const waitingResult = [];
        let wt = 0;
        for (let wt_i = 0; wt_i < burT.length; wt_i++) {
        wt = turnaroundTime()[wt_i] - burTA[wt_i];
        waitingResult.push(wt);
        }
    return waitingResult;
    };