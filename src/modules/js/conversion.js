import { completionTime } from "./cTime.js";
import { turnaroundTime } from "./tTime.js";
import { waitingTime } from "./wTime.js";
import { inputElements } from "./input.js";

// ====================== CONVERSION ======================
export function convert() {
    const { arrT, burT, arrTA, burTA, outputProcess, outputs, submits } =  inputElements();

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

            [p_id, 
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

            if(arrT.length != burT.length){
                submits.textContent = "Both inputs needs to have the same length"; 
                console.log("error: missing info")   
            }
            else {
                processOutTable.appendChild(tableRow);   
            }

        }

        if (arrT == 0 && burT == 0){
            submits.textContent = "Please enter a valid number";
            console.log("error: no info")  
        }
        compres();
        turnares();
        waitres();
    }

    if (submits.textContent != null && outputs.textContent != "Select an Algorithm"){
        submits.textContent = "Submit";
        outputProcess.innerHTML = "";

        console.log("FCFS conversion");
        processConvert(completionTime, turnaroundTime, waitingTime);
    }
    else if(outputs.textContent == "Select an Algorithm"){
        submits.textContent = "Please select an Algorithm first";
    }
}