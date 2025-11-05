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

    function processConvert(list, completion, turnaround, waiting) {
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

        for (let p_id = 0; p_id < list.length; p_id++) {
            const tableRow = document.createElement("tr");
            tableRow.classList.add("table-row-data");

            ["P" + p_id, 
            list[p_id].arrivalTime,
            list[p_id].burstTime,
             completion[p_id],
             turnaround[p_id],
             waiting[p_id]].forEach(data => {
                const td = document.createElement("td");
                td.classList.add("process-output");
                td.textContent = data;
                tableRow.appendChild(td);
            });
            processOutTable.appendChild(tableRow);
        }
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
                // Sort by arrival time before table is created
                combinedList.sort((a, b) => a.arrivalTime - b.arrivalTime);

                // Pass the sorted list to the computation functions
                const completion = completionTime(combinedList);
                const turnaround = turnaroundTime(combinedList);
                const waiting = waitingTime(combinedList);

                processConvert(combinedList, completion, turnaround, waiting);
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