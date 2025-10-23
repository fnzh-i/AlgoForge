// ====================== CONVERSION ======================
export function convert() {
    const arrT = document.getElementById("at-box").value;
    const burT = document.getElementById("bt-box").value;
    const outputProcess = document.getElementById("output-process");
    const outputs = document.getElementById("output-text");
    const submits = document.getElementById("submit");

    const arrTA = [...arrT];
    const burTA = [...burT];

    function processConvert(){
        for(let p_id = 0; p_id < arrT.length; p_id++){

            const processOutput = document.createElement("div");
            processOutput.classList.add("process-output");
            processOutput.textContent = `pID ${p_id}, AT ${arrTA[p_id]}, BT ${burTA[p_id]}`;

            if(arrT.length != burT.length){
                submits.textContent = "Both inputs needs to have the same length"; 
                console.log("error: missing info")   
            }
            else {
                console.log(processOutput.textContent);
                outputProcess.appendChild(processOutput);   
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