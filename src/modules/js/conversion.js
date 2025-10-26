// ====================== CONVERSION ======================
export function convert() {
    const arrT = document.getElementById("at-box").value;
    const burT = document.getElementById("bt-box").value;
    const outputProcess = document.getElementById("output-process");
    const outputs = document.getElementById("output-text");
    const submits = document.getElementById("submit");

    const arrTA = [...arrT].map(Number);
    const burTA = [...burT].map(Number);

    const headers = [
            "Process ID",
            "Arrival Time",
            "Burst Time",
            "Completion Time",
            "Turnaround Time",
            "Waiting Time"
            ];

    function processConvert(compres){

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

            [p_id, 
             arrTA[p_id],
             burTA[p_id],
            completion].forEach(data => {
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
    }

    function completionTime(){
        const completionResult = [];
        let sum = 0;
        
        for (let ct_i = 0; ct_i < burT.length; ct_i++) {
        sum += burTA[ct_i];
        
        completionResult.push(sum);
        }
    return completionResult;
    };

    if (submits.textContent != null && outputs.textContent != "Select an Algorithm"){
        submits.textContent = "Submit";
        outputProcess.innerHTML = "";
    
        processConvert(completionTime);

    }

    else if(outputs.textContent == "Select an Algorithm"){
        submits.textContent = "Please select an Algorithm first";
    }
}