import themeChange from "./themeChange.js";
import soups from "./dishes/soups.js";
import fried from "./dishes/fried.js";
import baked from "./dishes/baked.js";
import other from "./dishes/other.js";
import { makeMenuSection, makeMISCSection } from "./functions.js";
//Assing a theme handler to theme button
document.querySelector(".theme_btn").onclick = themeChange;

//Recipe var prevents createRecipe() functions from adding more data without
//deleting the old one
var recipeStatus = false;

makeMenuSection("dropdownS", "menuB1", "SOUPS", soups, recipeStatus);
makeMenuSection("dropdownB", "menuB2", "BAKED", baked, recipeStatus);
makeMenuSection("dropdownF", "menuB3", "FRIED", fried, recipeStatus);
makeMenuSection("dropdownO", "menuB4", "OTHER", other, recipeStatus);

let allDishes = [soups, fried, baked, other];

makeMISCSection(allDishes, recipeStatus);
