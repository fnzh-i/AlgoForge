// ====================== MAIN ======================
import { mainConfig } from "./js/config.js";
import { utils } from "./js/util.js";

window.addEventListener("DOMContentLoaded", () => {
  const algoDisplay = mainConfig();
  utils(algoDisplay);
});