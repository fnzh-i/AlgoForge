// ====================== MAIN ======================
import { mainConfig } from "./js/_config/config.js";
import { utils } from "./js/_config/util.js";
import {icons} from "./js/_icons/icons.js";

window.addEventListener("DOMContentLoaded", () => {
  const algoDisplay = mainConfig();
  icons();
  utils(algoDisplay);
});