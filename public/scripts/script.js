import themeChange from "./themeChange.js";
import soups from "./dishes/soups.js";
import fried from "./dishes/fried.js";
import baked from "./dishes/baked.js";
import other from "./dishes/other.js";
import { makeMenuSection, makeMISCSection } from "./functions.js";
//Assing a theme handler to theme button
document.querySelector(".theme_btn").onclick = themeChange;

makeMenuSection("dropdownS", "menuB1", "SOUPS", soups);
makeMenuSection("dropdownB", "menuB2", "BAKED", baked);
makeMenuSection("dropdownF", "menuB3", "FRIED", fried);
makeMenuSection("dropdownO", "menuB4", "OTHER", other);

let allDishes = [soups, fried, baked, other];

makeMISCSection(allDishes);
