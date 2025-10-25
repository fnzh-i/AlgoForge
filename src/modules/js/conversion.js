// ====================== CONVERSION ======================
export function convert() {
    const arrT = document.getElementById("at-box").value;
    const burT = document.getElementById("bt-box").value;
    const outputProcess = document.getElementById("output-process");
    const outputs = document.getElementById("output-text");
    const submits = document.getElementById("submit");

    const arrTA = [...arrT];
    const burTA = [...burT];
    
    const headers = [
            "Process ID",
            "Arrival Time",
            "Burst Time",
            "Completion Time",
            "Turnaround Time",
            "Waiting Time"
            ];

    function processConvert(){

        const processOutTable = document.createElement("table");
        processOutTable.classList.add("process-table");
        const tableRow = document.createElement("tr");
        tableRow.classList.add("table-row-header");

        processOutTable.appendChild(tableRow);
        outputProcess.appendChild(processOutTable);
        console.log("process table created");

        headers.forEach(headerText => {
            const header = document.createElement("th");
            header.textContent = headerText;
            tableRow.appendChild(header);
            
        });

        for (let p_id = 0; p_id < arrT.length; p_id++) {
            const tableRow = document.createElement("tr");
            tableRow.classList.add("table-row-data");

            ["pID " + p_id, 
             "AT " + arrTA[p_id], 
             "BT " + burTA[p_id]].forEach(data => {
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
    }

    if (submits.textContent == "Submit" && outputs.textContent != "Select an Algorithm" || 
        submits.textContent != "Submit" && outputs.textContent != "Select an Algorithm"){
        submits.textContent = "Submit";
        outputProcess.innerHTML = "";
        processConvert();

    }

    else if(outputs.textContent == "Select an Algorithm"){
        submits.textContent = "Please select an Algorithm first";
    }


    // ================ Commented Out Old Code ================
        // for(let p_id = 0; p_id < arrT.length; p_id++){ working version

    //         const tableRow = document.createElement("tr");
    //         tableRow.classList.add("table-row");

    //         const processOutput = document.createElement("td");
    //         processOutput.classList.add("process-output");
    //         processOutput.textContent = `pID ${p_id}, AT ${arrTA[p_id]}, BT ${burTA[p_id]}`;

    //         if(arrT.length != burT.length){
    //             submits.textContent = "Both inputs needs to have the same length"; 
    //             console.log("error: missing info")   
    //         }
    //         else {
    //             console.log(processOutput.textContent);
    //             tableRow.appendChild(processOutput);
    //             // processOutTable.appendChild(tableRow);   
    //         }
    //         processOutTable.appendChild(tableRow);   
    //     }

    // function processTable(){
    //     const processOutTable = document.createElement("table");
    //     processOutTable.classList.add("process-table");

    //     const headers = [
    //         "Process ID",
    //         "Arrival Time",
    //         "Burst Time",
    //         "Completion Time",
    //         "Turnaround Time",
    //         "Waiting Time"
    //     ];

    //     const tableRow = document.createElement("tr");
    //     tableRow.classList.add("table-row");

    //     headers.forEach(headerText => {
    //         const header = document.createElement("th");
    //         header.textContent = headerText;
    //         tableRow.appendChild(header);
    //     });

    //     processOutTable.appendChild(tableRow);

    //     outputProcess.appendChild(processOutTable);
    //     console.log("process table created");
    // }

    // for(let p_id of arrTA){ //shorthand (not consistent needs to have 4 values)

    //     let output = `pID ${p_id}, AT ${arrTA[p_id]}, BT ${burTA[p_id]}`;

    //     if(arrT.length != burT.length){
    //         console.log("error: missing info") 
    //     }
    //     else {
    //         console.log(output);
    //     }
    // }
}