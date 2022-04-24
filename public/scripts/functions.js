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
  let recipeHeader = createDiv("recipeHeader", "flex"); //div for recipe title
  recipeHeader.style.fontSize = "2em";
  recipeHeader.innerHTML = "<b>" + list[dishName][0] + "</b>";
  return recipeHeader;
}
//create the dish illustration for recipe div
function setIllustration(dishName, list) {
  let illustration = document.createElement("img", "");
  illustration.src = list[dishName][3];
  illustration.alt = "RECIPE_ILLUSTRATION";
  illustration.className = "recepiIllustration";
  return illustration;
}
//Cooking process text for recipe div
function setMethod(dishName, list) {
  //Set up process text
  let cookingMethod = createElement("p", "method");
  cookingMethod.textContent = list[dishName][2];
  return cookingMethod;
}
//Ingridients table for recipe div
function createIngTable(dishName, list) {
  let ingredients = createElement("table", "table");

  for (let i = 0; i < list[dishName][1].length; i++) {
    let row = createElement("tr", "row");
    ingredients.appendChild(row);
    for (let j = 0; j < list[dishName][1][i].length - 1; j++) {
      //give amount cells it's own class for CSS
      let lineTxt;
      j == 0
        ? (lineTxt = createElement("td", "td tdA"))
        : (lineTxt = createElement("td", "td"));

      lineTxt.textContent = list[dishName][1][i][j]; //cell content
      ingredients.childNodes[i].appendChild(lineTxt);
    }
  }

  return ingredients;
}
//MAIN FUNCTION--------------------------------------------------------------------
//populates the"recipe" div. Content from list object
export default function createRecipe(dishName, list) {
  //if some recipe is already on page, first empty it out
  //if some recipe is already on page, first empty it out
  let target = document.getElementsByClassName("recipe")[0];
  target.innerHTML = "";
  console.log(target.style);
  if (target.style.margin == "") {
    target.style.margin = "5%";
  }
  //prepare an array to hold all future DOM elements
  let elementArray = [];
  //fill the array wtih DOM elements
  elementArray.push(setTitle(dishName, list));
  elementArray.push(document.createElement("br"));
  let container = createElement("div", "rContainer");
  container.appendChild(setIllustration(dishName, list));
  container.appendChild(createIngTable(dishName, list));
  container.appendChild(setMethod(dishName, list));
  elementArray.push(container);

  //Append all created elements into the "RECIPE" div
  elementArray.map((element) => {
    document.getElementsByClassName("recipe")[0].appendChild(element);
  });

  //return indicates that at least one recipe has now been created
  //next time it'll triger the cleanup done by the top section of this function

  return true; //set that the recepy is now present on the page
}

//MENU FUNCTION--------------------------------------------------------------------

export function makeMenuSection(className, buttonClass, theme, dishes) {
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
      createRecipe(key, dishes);
    };
    node.childNodes[1].appendChild(a);
  });
}
//MISC MENU FUNCTION--------------------------------------------------------------------

export function makeMISCSection(dishes) {
  let node = document.querySelector(".dropdownM");
  node.appendChild(createElement("button", "menuB5"));
  node.childNodes[0].innerText = "Menu";
  //select the button container

  node.appendChild(createElement("div", "dropdown-content"));
  dishes.map((element) => {
    //fill it with <a> elements that each have a class and text
    let keys = Object.keys(element);
    keys.map((key) => {
      let ilu = document.createElement("img", `tDish`);
      ilu.className = `tDish`;
      ilu.src = element[key][3];
      ilu.alt = element[key][0] + " image";

      ilu.onclick = function () {
        createRecipe(key, element);
      };
      node.childNodes[1].appendChild(ilu);
    });
  });
}
export function adjustMenu() {
  let width = window.innerWidth;
  if (width < 620) {
    document.querySelector(".menuB1").innerText = "S";
    document.querySelector(".menuB2").innerText = "B";
    document.querySelector(".menuB3").innerText = "F";
    document.querySelector(".menuB4").innerText = "O";
    document.querySelector(".menuB5").innerText = "M";
  } else {
    document.querySelector(".menuB1").innerText = "Soups";
    document.querySelector(".menuB2").innerText = "Baked";
    document.querySelector(".menuB3").innerText = "Fried";
    document.querySelector(".menuB4").innerText = "Other";
    document.querySelector(".menuB5").innerText = "Menu";
  }
}
