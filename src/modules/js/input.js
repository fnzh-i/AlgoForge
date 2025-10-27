// ====================== INPUT ELEMENTS ======================
export function inputElements(){
    const arrT = document.getElementById("at-box").value;
    const burT = document.getElementById("bt-box").value;
    const outputProcess = document.getElementById("output-process");
    const outputs = document.getElementById("output-text");
    const submits = document.getElementById("submit");

    const arrTA = [...arrT].map(Number);
    const burTA = [...burT].map(Number);
    
    return { arrT, burT, arrTA, burTA, outputProcess, outputs, submits };
}