const rList={
"finnSoup":["FINNISH SOUP",
			[
				[2,"cans", "Baked beans", 146 ],
				[450, "grams", "Ground beef", 1035],
				[1, " ", "Onion", 44],
				[1000, "grams", "Potatoes", 770]
			],
			"Chop up, throw in pot, boil.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
			"images/dish1img.svg"],
"stirFry":["STIR FRY",
			[
				[2, "pcs","Bellpeppers",0],
				[400,"frams","Chicken Filtet",0],
				[2,"tbl s","Vinegra",0],
				[1,"clove","garlic",0],
				[0.5,"glass","Soy sauce",0],
				[1,"tbl s","Sesane oil",0]
			],
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"images/dish2img.svg"
		]
}

//assign variablename to HTML buttons
const themeButton = document.querySelector(".theme_btn");
const soupsButton = document.querySelector(".finnishS");
const bakedButton = document.querySelector(".stirF");
//logic triggers:
var dark=false;
var recipe=false;
//Page color change on button click, back and forth
themeButton.onclick=function(){
	if (!dark){
	document.documentElement.style.setProperty("--light-color","rgb(160,129,108)");
	document.documentElement.style.setProperty("--dark-color","rgb(232, 222, 209)");
	document.documentElement.style.setProperty("--light-colora","rgb(160,129,108,0.60)");
	document.documentElement.style.setProperty("--dark-colora","rgb(232, 222, 209,0.60)");
	dark=true;
	} else{
	document.documentElement.style.setProperty("--light-color","rgb(232, 222, 209)");
	document.documentElement.style.setProperty("--dark-color","rgb(160,129,108)");
	document.documentElement.style.setProperty("--light-colora","rgb(232, 222, 209,0.60)");
	document.documentElement.style.setProperty("--dark-colora","rgb(160,129,108,0.60)");
	dark=false;
	}
}
//creates a div funtion for next function use
function createDiv(){
	let div = document.createElement("div");
	div.style.display = "inline-block";
	return div;
}
function createTable(){
	let table = document.createElement("table");
	return table;
}
function createTr(){
	let tr = document.createElement("tr");
	return tr;
}function createTd(){
	let td = document.createElement("td");
	return td;
}
/*function creates divs for TITLE, INGREDIENTS and METHOD part of recipe
and places them into the "recipe" div. Content from rList object*/
function createRecipe(recipe,name){
    let dishName = name;
    if(recipe){
		document.getElementsByClassName("recipe")[0].innerHTML="";
    }
    //Set up title of recipe
    let recipeHeader = createDiv();//div for recipe title
	recipeHeader.className = "recipeHeader";
	recipeHeader.style.fontSize="2em";
	recipeHeader.style.display="block";
    recipeHeader.innerHTML ="<b>"+rList[dishName][0]+"</b>";
    document.getElementsByClassName("recipe")[0].appendChild(recipeHeader);
    let br = document.createElement("br");
    document.getElementsByClassName("recipe")[0].appendChild(br);

	let ingredientsDiv = createDiv(); //div to put both image and ingridiets list into for styling
	ingredientsDiv.className = "ingredientsDiv";
	document.getElementsByClassName("recipe")[0].appendChild(ingredientsDiv);
	//create the dish illustration
	let illustration = document.createElement("img");
	illustration.className="dishIllustration";
	illustration.src=rList[dishName][3];
	illustration.alt="RECIPE_ILLUSTRATION";
	document.getElementsByClassName("ingredientsDiv")[0].appendChild(illustration);
    //set up recipe

	let ingredientsTxt=createDiv();		// a div to put the ingridients table into for styling
	ingredientsTxt.className="tableContainerDiv";
	document.getElementsByClassName("ingredientsDiv")[0].appendChild(ingredientsTxt);

	let ingredients = createTable();
	ingredients.className = "table";
	document.getElementsByClassName("tableContainerDiv")[0].appendChild(ingredients);
    for(let i = 0; i<rList[dishName][1].length; i++){
	  let row = createTr();
	  row.className = "row"+i;
	  document.getElementsByClassName("table")[0].appendChild(row);
      for(let j = 0; j<rList[dishName][1][i].length; j++){
        let lineTxt = createTd();//cell to hold each new lines text
        lineTxt.innerHTML ="<b>"+rList[dishName][1][i][j]+"</b>";//cell content
        document.getElementsByClassName("row"+i)[0].appendChild(lineTxt);	
      }

    }//1st for	
    document.getElementsByClassName("recipe")[0].appendChild(br);//adds the break  
	//Set up process text
	let cookingMethod = createDiv();
	cookingMethod.innerHTML= "<b>"+rList[dishName][2]+"</b>";
	document.getElementsByClassName("recipe")[0].appendChild(cookingMethod);
    recipe=true;
    
    return recipe;//set that the recepy is now present on the page
}


soupsButton.onclick = function(){
	recipe=createRecipe(recipe, "finnSoup");
}
bakedButton.onclick = function(){
	recipe=createRecipe(recipe, "stirFry");
}/*
bakedButton.onclick = function(){
	recipe=createRecipe(recipe, "stirFry");
}
bakedButton.onclick = function(){
	recipe=createRecipe(recipe, "stirFry");
}
bakedButton.onclick = function(){
	recipe=createRecipe(recipe, "stirFry");
}*/