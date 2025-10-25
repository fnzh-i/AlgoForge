// ====================== ALGORITHMS ======================
export function algorithms(){
    
    const outputs = document.getElementById("output-text");
    const submits = document.getElementById("submit");
    const algos = document.getElementById("algo-list");

    const algorithmsList = ["TEST OPTION","First Come First Serve (FCFS)",
                            "Shortest-Job-First (SJF)",
                            "Shortest Remaining Time First (SRTF)",
                            "Priority Scheduling (PRIO)",
                            "Preemptive Priority (PRE-PRIO)"];

    function algolisting(){
        
        algorithmsList.forEach(algo =>{
                const algoAnc = document.createElement("a");
                algoAnc.classList = "algo-anc";
                algoAnc.id = "algo-anc";
                algoAnc.textContent = algo;
                
                algos.appendChild(algoAnc);
                // console.log('algo listing func',algoAnc);  
        })
        
    }

    if (outputs.textContent == "Select an Algorithm"){
        submits.textContent = "Submit";
        // console.log("algorithm lists");
        algolisting();

    }
    // else if (outputs.textContent != "Select an Algorithm"){
    // }
    // else{
    //     console.log("dongdong");
    //         // removeProcess();
    // }
};

// const fcfsCont = document.createElement("div");
// fcfsCont.classList.add("fcfs-cont");

// const toFcfsAlgo = document.createElement("input");
// toFcfsAlgo.classList.add("fcfs-algo");

// algoDisplay.appendChild(fcfsCont);
// fcfsCont.appendChild(fcfsAlgo);