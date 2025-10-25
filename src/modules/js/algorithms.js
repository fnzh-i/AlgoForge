// ====================== ALGORITHMS ======================
export function algorithms(){
    
    const outputs = document.getElementById("output-text");


    const algorithmsList = ["TEST OPTION","First Come First Serve (FCFS)",
                            "Shortest-Job-First (SJF)",
                            "Shortest Remaining Time First (SRTF)",
                            "Priority Scheduling (PRIO)",
                            "Preemptive Priority (PRE-PRIO)"];

    function outputAlgo(e){
        algoList = e.target;
        if (algoList && algoList.classList.contains("output-text"))
            {
                const algoLists = document.createElement('div');
                algoLists.classList.add("algo-list");
                algoLists.id = "algo-list";
                algoLists.textContent;
                outputs.appendChild(algoLists);
            }
    }

    function algolisting(){
        if (document.getElementById("algo-list")){
            document.getElementById("algo-list").remove();
            // console.log("previous algo listing removed");
        }

        const algoLists = document.createElement('div');
        algoLists.classList.add("algo-list");
        algoLists.id = "algo-list";
        algoLists.innerHTML = "";
        outputs.appendChild(algoLists);
        // console.log("algo listing container created");
        
        algorithmsList.forEach(algo =>{
                const algos = document.getElementById("algo-list");

                let algoAnc = document.createElement("a");
                algoAnc.classList = "algo-anc";
                algoAnc.id = "algo-anc";
                algoAnc.textContent = algo;
                algos.appendChild(algoAnc);
                // console.log('algo listing func',algoAnc);  
        })
        
    }

    if (outputs.textContent == "Select an Algorithm"||outputs.textContent != "Select an Algorithm"){
        // console.log("algorithm lists");
        algolisting(); 
    }

    outputs.addEventListener("click", chosenAlgorithm);

    function chosenAlgorithm(e){
        const selectedAlgo = e.target;
        if (selectedAlgo && selectedAlgo.classList.contains("algo-anc")){
            outputs.textContent = selectedAlgo.textContent;
            // console.log("chosen algo func",selectedAlgo.textContent);
        }
    }

};

// const fcfsCont = document.createElement("div");
// fcfsCont.classList.add("fcfs-cont");

// const toFcfsAlgo = document.createElement("input");
// toFcfsAlgo.classList.add("fcfs-algo");

// algoDisplay.appendChild(fcfsCont);
// fcfsCont.appendChild(fcfsAlgo);