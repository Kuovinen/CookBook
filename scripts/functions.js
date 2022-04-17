//MINOR UTILITERY FUNCTIONS-----------------------------------------------------
//div element function
export function createDiv(className, display) {
  let div = document.createElement("div");
  div.style.display = display;
  div.className = className;
  return div;
}
//multipurpose element function
export function createElement(type, className) {
  let element = document.createElement(type);
  element.className = className;
  return element;
}
//create title for recipe div
function setTitle(dishName, list) {
  let recipeHeader = createDiv("recipeHeader", "block"); //div for recipe title
  recipeHeader.style.fontSize = "2em";
  recipeHeader.innerHTML = "<b>" + list[dishName][0] + "</b>";
  return recipeHeader;
}
//create the dish illustration for recipe div
function setIllustration(dishName, list) {
  let illustration = document.createElement("img", "dishIllustration");
  illustration.src = list[dishName][3];
  illustration.alt = "RECIPE_ILLUSTRATION";
  return illustration;
}
//Cooking process text for recipe div
function setMethod(dishName, list) {
  //Set up process text
  let cookingMethod = createElement("p", "block");
  cookingMethod.textContent = list[dishName][2];
  return cookingMethod;
}
//Ingridients table for recipe div
function createIngTable(dishName, list) {
  let ingredientsTxt = createDiv("tableContainerDiv", "inline-block");
  let ingredients = createElement("table", "table");

  for (let i = 0; i < list[dishName][1].length; i++) {
    let row = createElement("tr", "row" + i);
    ingredients.appendChild(row);
    for (let j = 0; j < list[dishName][1][i].length; j++) {
      let lineTxt = createElement("td", "td"); //cell to hold each new lines text
      lineTxt.textContent = list[dishName][1][i][j]; //cell content
      ingredients.childNodes[i].appendChild(lineTxt);
    }
  }
  ingredientsTxt.appendChild(ingredients);

  return ingredientsTxt;
}
//MAIN FUNCTION--------------------------------------------------------------------
//populates the"recipe" div. Content from list object
export default function createRecipe(recipe, dishName, list) {
  //if some recipe is already on page, first empty it out
  if (recipe) {
    document.getElementsByClassName("recipe")[0].innerHTML = "";
  }
  //prepare an array to hold all future DOM elements
  let elementArray = [];
  //fill the array wtih DOM elements
  elementArray.push(setTitle(dishName, list));
  elementArray.push(document.createElement("br"));
  elementArray.push(createDiv("ingredientsDiv", "inline-block"));
  elementArray.push(setMethod(dishName, list));
  elementArray.push(document.createElement("br"));
  //populate ingredientsDiv (elementArray[3]) with image and ingredients data
  let illustration = setIllustration(dishName, list);
  let ingredientsTxt = createIngTable(dishName, list);
  elementArray[2].appendChild(illustration);
  elementArray[2].appendChild(ingredientsTxt);
  //Append all created elements into the "RECIPE" div
  elementArray.map((element) => {
    document.getElementsByClassName("recipe")[0].appendChild(element);
  });

  //return indicates that at least one recipe has now been created
  //next time it'll triger the cleanup done by the top section of this function

  return true; //set that the recepy is now present on the page
}

//MENU FUNCTION--------------------------------------------------------------------

export function makeMenuSection(
  className,
  buttonClass,
  theme,
  dishes,
  recipeStatus
) {
  //select the button container
  let node = document.querySelector("." + className);
  //make the button and add it's theme text
  node.appendChild(createElement("button", buttonClass));
  node.appendChild(createElement("div", "dropdown-content"));
  node.childNodes[0].innerHTML = theme;
  //fill it with <a> elements that each have a class and text
  let keys = Object.keys(dishes);
  keys.map((key) => {
    let a = createElement("a", key);
    a.textContent = dishes[key][0];
    a.onclick = function () {
      recipeStatus = createRecipe(recipeStatus, key, dishes);
    };
    node.childNodes[1].appendChild(a);
  });
}
