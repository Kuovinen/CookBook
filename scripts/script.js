import themeChange from "./themeChange.js";
import createRecipe from "./functions.js";
import soups from "./dishes/soups.js";
import fried from "./dishes/fried.js";

//Assing a theme handler to theme button
document.querySelector(".theme_btn").onclick = themeChange;
//MENU dish buttons
const finnishSoup = document.querySelector(".finnishS");
const stirFry = document.querySelector(".stirF");
//Recipe var prevents createRecipe() functions from adding more data without
//deleting the old one
var recipe = false;
//Page color change on button click, back and forth

finnishSoup.onclick = function () {
  recipe = createRecipe(recipe, "finnSoup", soups);
};
stirFry.onclick = function () {
  recipe = createRecipe(recipe, "stirFry", fried);
}; /*
bakedButton.onclick = function(){
	recipe=createRecipe(recipe, "stirFry");
}
bakedButton.onclick = function(){
	recipe=createRecipe(recipe, "stirFry");
}
bakedButton.onclick = function(){
	recipe=createRecipe(recipe, "stirFry");
}*/
