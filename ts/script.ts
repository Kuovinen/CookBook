import themeChange from "./themeChange";
import soups from "./dishes/soups";
import fried from "./dishes/fried";
import baked from "./dishes/baked";
import other from "./dishes/other";
import { makeMenuSection, makeMISCSection, adjustMenu } from "./functions";
//Assing a theme handler to theme button
const themeBtn = document.querySelector(".theme_btn") as HTMLElement;
themeBtn.onclick = themeChange;

makeMenuSection("dropdownS", "menuB1", "Soups", soups);
makeMenuSection("dropdownB", "menuB2", "Baked", baked);
makeMenuSection("dropdownF", "menuB3", "Fried", fried);
makeMenuSection("dropdownO", "menuB4", "Other", other);

const allDishes = [soups, fried, baked, other];

makeMISCSection(allDishes);
window.addEventListener("resize", adjustMenu);
adjustMenu();
