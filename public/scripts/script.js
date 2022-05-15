import themeChange from "./themeChange.js";
import soups from "./dishes/soups.js";
import fried from "./dishes/fried.js";
import baked from "./dishes/baked.js";
import other from "./dishes/other.js";
import { makeMenuSection, makeMISCSection, adjustMenu } from "./functions.js";
//Assing a theme handler to theme button
document.querySelector(".theme_btn").onclick = themeChange;

makeMenuSection("dropdownS", "menuB1", "Soups", soups);
makeMenuSection("dropdownB", "menuB2", "Baked", baked);
makeMenuSection("dropdownF", "menuB3", "Fried", fried);
makeMenuSection("dropdownO", "menuB4", "Other", other);

const allDishes = [soups, fried, baked, other];

makeMISCSection(allDishes);
window.addEventListener("resize", adjustMenu);
adjustMenu();
