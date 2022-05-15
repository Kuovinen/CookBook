//MINOR UTILITERY FUNCTIONS-----------------------------------------------------
//div element function
export function createDiv(className: string, display: string) {
  const div = document.createElement("div");
  div.style.display = display;
  div.className = className;
  return div;
}
//multipurpose element function
export function makeElement(type: string, className: string) {
  const element = document.createElement(type);
  element.className = className;
  return element;
}
interface IRecipe {
  [key: string]: [string, [number, string, string, number][], string, string];
}
//create title for recipe div
function setTitle(dishName: string, list: IRecipe) {
  const recipeHeader = createDiv("recipeHeader", "flex"); //div for recipe title
  recipeHeader.style.fontSize = "2em";
  recipeHeader.innerHTML = "<b>" + list[dishName][0] + "</b>";
  return recipeHeader;
}
//create the dish illustration for recipe div
function setIllustration(dishName: string, list: IRecipe) {
  const illustration = document.createElement("img");
  illustration.src = list[dishName][3];
  illustration.alt = "RECIPE_ILLUSTRATION";
  illustration.className = "recepiIllustration";
  return illustration;
}
//Cooking process text for recipe div
function setMethod(dishName: string, list: IRecipe) {
  //Set up process text
  const cookingMethod = makeElement("p", "method");
  cookingMethod.textContent = list[dishName][2];
  return cookingMethod;
}
//Ingridients table for recipe div
function createIngTable(dishName: string, list: IRecipe) {
  const ingredients = makeElement("table", "table");

  for (let i = 0; i < list[dishName][1].length; i++) {
    const row = makeElement("tr", "row");
    ingredients.appendChild(row);
    for (let j = 0; j < list[dishName][1][i].length - 1; j++) {
      //give amount cells it's own class for CSS
      let lineTxt;
      j == 0
        ? (lineTxt = makeElement("td", "td tdA"))
        : (lineTxt = makeElement("td", "td"));

      lineTxt.textContent = list[dishName][1][i][j].toString(); //cell content
      ingredients.childNodes[i].appendChild(lineTxt);
    }
  }

  return ingredients;
}
//MAIN FUNCTION--------------------------------------------------------------------
//populates the"recipe" div. Content from list object
export default function createRecipe(dishName: string, list: {}) {
  //if some recipe is already on page, first empty it out
  //if some recipe is already on page, first empty it out
  const target = document.getElementsByClassName("recipe")[0] as HTMLElement;
  target.innerHTML = "";
  if (target.style.margin == "") {
    target.style.margin = "5%";
  }
  //prepare an array to hold all future DOM elements
  const elementArray = [];
  //fill the array wtih DOM elements
  elementArray.push(setTitle(dishName, list));
  elementArray.push(document.createElement("br"));
  const container = makeElement("div", "rContainer");
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

export function makeMenuSection(
  className: string,
  buttonClass: string,
  theme: string,
  dishes: {
    [key: string]: (string | (string | number)[][])[];
  }
) {
  //select the button container
  const node = document.querySelector("." + className) as HTMLElement;
  //make the button and add it's theme text
  node.appendChild(makeElement("button", buttonClass));
  node.appendChild(makeElement("div", "dropdown-content"));
  const child = node.childNodes[0] as HTMLElement;
  child.innerHTML = theme;
  //fill it with <a> elements that each have a class and text
  const keys = Object.keys(dishes);
  keys.map((key) => {
    const a = makeElement("a", key);
    a.textContent = dishes[key][0].toString();
    a.onclick = function () {
      createRecipe(key, dishes);
    };
    node.childNodes[1].appendChild(a);
  });
}
//MISC MENU FUNCTION--------------------------------------------------------------------
type IMiscDishes = {
  [key: string]: (string | (string | number)[][])[];
}[];

export function makeMISCSection(dishes: IMiscDishes): void {
  const node = document.querySelector(".dropdownM") as HTMLElement;
  node.appendChild(makeElement("button", "menuB5"));
  const child = node.childNodes[0] as HTMLElement;
  child.innerText = "Menu";
  //select the button container

  node.appendChild(makeElement("div", "dropdown-content"));
  dishes.map((element) => {
    //fill it with <a> elements that each have a class and text
    const keys = Object.keys(element);
    keys.map((key) => {
      const ilu = document.createElement("img") as HTMLImageElement;
      ilu.className = `tDish`;
      ilu.src = element[key][3].toString();
      ilu.alt = element[key][0] + " image";

      ilu.onclick = function () {
        createRecipe(key, element);
      };
      node.childNodes[1].appendChild(ilu);
    });
  });
}
export function adjustMenu(): void {
  const width = window.innerWidth;
  const menuB1 = document.querySelector(".menuB1") as HTMLElement;
  const menuB2 = document.querySelector(".menuB1") as HTMLElement;
  const menuB3 = document.querySelector(".menuB1") as HTMLElement;
  const menuB4 = document.querySelector(".menuB1") as HTMLElement;
  const menuB5 = document.querySelector(".menuB1") as HTMLElement;
  if (width < 620) {
    menuB1.innerText = "S";
    menuB2.innerText = "B";
    menuB3.innerText = "F";
    menuB4.innerText = "O";
    menuB5.innerText = "M";
  } else {
    menuB1.innerText = "Soups";
    menuB2.innerText = "Baked";
    menuB3.innerText = "Fried";
    menuB4.innerText = "Other";
    menuB5.innerText = "Menu";
  }
}
