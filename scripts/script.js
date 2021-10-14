const rList={
"finnSoup":["FINNISH SOUP",
			[
				[2,"cans", "Baked beans", 146 ],
				[450, "grams", "Ground beef", 1035],
				[1, " ", "Onion", 44],
				[1000, "grams", "Potatoes", 770]
			],
			"Chop up, throw in pot, boil."],
"stirFry":["STIR FRY",
			[
				[2, "pcs","Bellpeppers",0],
				[400,"frams","Chicken Filtet",0],
				[2,"tbl s","Vinegra",0],
				[1,"clove","garlic",0],
				[0.5,"glass","Soy sauce",0],
				[1,"tbl s","Sesane oil",0]
			],
			"Chop up, throw in pan, fry. Don't let it burn."]
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
	recipeHeader.style.fontSize="2em";
    recipeHeader.innerHTML ="<b>"+rList[dishName][0]+"</b>";
    document.getElementsByClassName("recipe")[0].appendChild(recipeHeader);
    let br = document.createElement("br");
    document.getElementsByClassName("recipe")[0].appendChild(br);

    //set up recipe
	let ingredients = createTable();
	ingredients.className = "table";
	document.getElementsByClassName("recipe")[0].appendChild(ingredients);
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