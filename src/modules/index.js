// ====================== MAIN ======================
import { mainConfig } from "./js/config.js";
import { utils } from "./js/util.js";
import {icons} from "./js/_icons/icons.js";

window.addEventListener("DOMContentLoaded", () => {
  const algoDisplay = mainConfig();
  icons();
  utils(algoDisplay);
});