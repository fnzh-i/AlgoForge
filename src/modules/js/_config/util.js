// ====================== UTILITY FUNCTIONS ======================
import { convert } from "../_modules/conversion.js";
import { algorithms } from "../_modules/algorithms.js";

export function utils(algoDisplay) {
    const givenCont = document.createElement("div");
    givenCont.classList.add("given-cont");

    const arrivalLabel = document.createElement("label");
    arrivalLabel.textContent = "Arrival Time:";
    arrivalLabel.id = "at-label";
    arrivalLabel.setAttribute("for", "at-box");

    const arrivalTime = document.createElement("input");
    arrivalTime.classList.add("user-given");
    arrivalTime.id = "at-box";
    arrivalTime.type = "number";
    arrivalTime.placeholder = "0123";
    arrivalTime.value;

    const burstLabel = document.createElement("label");
    burstLabel.textContent ="Burst Time:";
    burstLabel.id = "bt-label";
    burstLabel.setAttribute("for", "bt-box");

    const burstTime = document.createElement("input");
    burstTime.classList.add("user-given");
    burstTime.id = "bt-box";
    burstTime.type = "number";
    burstTime.placeholder = "1234";
    burstTime.value;
    

    algoDisplay.appendChild(givenCont);

    givenCont.appendChild(arrivalLabel);
    givenCont.appendChild(arrivalTime);
    givenCont.appendChild(burstLabel);
    givenCont.appendChild(burstTime);

    const submitButton = document.createElement("button");
    submitButton.classList.add("submit-button")
    submitButton.id = "submit";
    submitButton.textContent="Submit";
    
    givenCont.appendChild(submitButton);

    const outputs = document.createElement("div");
    outputs.classList.add("output")
    outputs.id = "output";
    outputs.textContent;
   
    givenCont.appendChild(outputs);

    const outputText = document.createElement("div");
    outputText.classList.add("output-text")
    outputText.id = "output-text";
    outputText.textContent= "Select an Algorithm";
   
    outputs.appendChild(outputText);

    const outputProcess = document.createElement("div");
    outputProcess.classList.add("output-process")
    outputProcess.id = "output-process";
   
    outputs.appendChild(outputProcess);

// ====================== UTILITY LISTENERS  ======================
    submitButton.addEventListener("click", convert);
    outputs.addEventListener("click", algorithms);


}

