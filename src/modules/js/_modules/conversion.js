import { completionTime, turnaroundTime, waitingTime } from "../_computation/index.js";

import { inputElements } from "./_input.js";
import { getSelectedAlgorithm } from "./_state.js";

// ====================== CONVERSION ======================
export function convert() {
    const { arrT, arrTA, burTA, outputProcess, combinedList, submits } =  inputElements();

    const headers = [
        "Process ID",
        "Arrival Time",
        "Burst Time",
        "Completion Time",
        "Turnaround Time",
        "Waiting Time"
        ];

    function processConvert(compres, turnares, waitres) {
        const processOutTable = document.createElement("table");
        processOutTable.classList.add("process-table");
        const tableRow = document.createElement("tr");
        tableRow.classList.add("table-row-header");

        processOutTable.appendChild(tableRow);
        outputProcess.appendChild(processOutTable);
        // console.log("process table created");

        headers.forEach(headerText => {
            const header = document.createElement("th");
            header.textContent = headerText;
            tableRow.appendChild(header);
            
        });

        for (let p_id = 0; p_id < arrT.length; p_id++) {
            const tableRow = document.createElement("tr");
            tableRow.classList.add("table-row-data");

            const completion = compres()[p_id];
            const turnaround = turnares()[p_id];
            const waiting = waitres()[p_id];

            ["P" + p_id, 
             arrTA[p_id],
             burTA[p_id],
             completion,
             turnaround,
             waiting].forEach(data => {
                const td = document.createElement("td");
                td.classList.add("process-output");
                td.textContent = data;
                tableRow.appendChild(td);
            });
            processOutTable.appendChild(tableRow);
        }
        compres();
        turnares();
        waitres();
    }

    submits.addEventListener("click", () => {
        const outputText = getSelectedAlgorithm();
        if (!outputText || outputText === "Select an Algorithm") {
            submits.textContent = "Please select an Algorithm first";
            console.log("error: no algorithm selected");
            return;
        }
        cleanOutputText(outputText);
    });

    function cleanOutputText(outputText){
        outputProcess.innerHTML = "";

        switch (outputText) {
            case "First Come First Serve (FCFS)":
                console.log("FCFS conversion");
                combinedList.sort(processConvert(completionTime, turnaroundTime, waitingTime));
                break;

            case "Shortest-Job-First (SJF)":
                console.log("SJF conversion");
                break;
            case "Shortest Remaining Time First (SRTF)":
                console.log("SRTF conversion");
                break;
            case "Priority Scheduling (PRIO)":
                console.log("PRIO conversion");
                break;
            case "Preemptive Priority (PRE-PRIO)":
                console.log("PRE-PRIO conversion");
                break;

            default:
                submits.textContent = "This algorithm is not yet implemented";
                // console.log("Algorithm not implemented: " + outputText);
                break;
        }
    }
}