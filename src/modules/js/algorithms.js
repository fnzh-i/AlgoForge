// ====================== ALGORITHMS ======================
export function algorithms(){
    
    const outputs = document.getElementById("output-text");


    const algorithmsList = ["First Come First Serve (FCFS)",
                            "Shortest Job First (SJF)",
                            "Shortest Remaining Time First (SRTF)",
                            "Priority Scheduling (PRIO)",
                            "Preemptive Priority (PRE-PRIO)"];

    function algolisting(){
        if (document.getElementById("algo-list")){
            document.getElementById("algo-list").remove();
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