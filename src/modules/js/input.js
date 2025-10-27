// ====================== INPUT ELEMENTS ======================
export function inputElements(){
    const arrT = document.getElementById("at-box").value;
    const burT = document.getElementById("bt-box").value;
    const outputProcess = document.getElementById("output-process");
    const outputs = document.getElementById("output-text");
    const submits = document.getElementById("submit");

    const arrTA = [...arrT].map(Number);
    const burTA = [...burT].map(Number);

    if (burTA.includes(NaN) || arrTA.includes(NaN)) {
        submits.textContent = "Please enter valid numbers only.";
        throw new Error("Invalid input: Non-numeric values detected.");
    }
    else if (arrTA.length === 0 || burTA.length === 0) {
        submits.textContent = "Please enter at least two or more number in each input.";
        throw new Error("Invalid input: Empty input detected.");
    }
    else if (arrTA.length !== burTA.length) {
        submits.textContent = "Both inputs needs to have the same length";
        throw new Error("Invalid input: Mismatched input lengths.");
    }
    else if (burTA.includes(0)) {
        window.alert("Burst Time cannot have 0.");
        throw new Error("Invalid input: Burst Time cannot have 0.");
    }

    
    return { arrT, burT, arrTA, burTA, outputProcess, outputs, submits };
}