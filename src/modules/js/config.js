// ====================== CONFIG ======================
export function mainConfig() {

    const algoDisplay = document.createElement("div");
    algoDisplay.classList.add("algo-display")

    maincon.appendChild(algoDisplay);

    const algos = document.createElement("div");
    algos.classList.add("algos-cont");

    algos.textContent="Algo Gen by fnzh";

    algoDisplay.appendChild(algos);

    return algoDisplay;
}