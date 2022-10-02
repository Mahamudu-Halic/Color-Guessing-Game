var colorSquare = document.querySelectorAll(".color");
var colorDisplay = document.getElementById("colorDisplay");
var answer = document.getElementById("answer");
var h1 = document.querySelector('h1');
var resetbtn = document.getElementById("reset");
var easybtn = document.getElementById("easy");
var hardbtn = document.getElementById("hard");
var num = 6;
//assigning to colors the function generateRandomColors
var colors = generateRadomColors(num);
//assigning to pickedColor the function pickedColor
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;


for(var i = 0; i < colorSquare.length; i++){
	//assigning values to colorSquare
	colorSquare[i].style.background = colors[i];
	//adding event listener to colorSquare
	colorSquare[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor){
			answer.textContent = "Correct";
			changeBackground(clickedColor);
			h1.style.background = clickedColor;
			resetbtn.textContent = "Play Again";

		}else{
			answer.textContent = "Try Again";
			this.style.background="none";
		}
	});
}

//Reset button event listeners
resetbtn.addEventListener("click", function(){
	difficulty(num);

});

resetbtn.addEventListener("mouseover", btnBackgroundColor);

resetbtn.addEventListener("mouseout", removeBtnBackgroundColor);

//Easy button event listeners
easybtn.addEventListener("click", function(){
	num = 3;
	//removing background from all squares
	for(var i = 0; i < colorSquare.length; i++){
		colorSquare[i].style.background = "none";
	}
	difficulty(num);
	
});

easybtn.addEventListener("mouseover", btnBackgroundColor);

easybtn.addEventListener("mouseout", removeBtnBackgroundColor);

//Hard button event listeners
hardbtn.addEventListener("click", function(){
	num = 6;
	difficulty(num);
});

hardbtn.addEventListener("mouseover", btnBackgroundColor);

hardbtn.addEventListener("mouseout", removeBtnBackgroundColor);

//Functions Below
//changing the background if guessed correct
function changeBackground(color){
	for(var i = 0; i < colors.length; i++){
		colorSquare[i].style.background = color;
	}
}
//picking color user is to guess
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
//generating an array of random colors
function generateRadomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		//adding generated rgb values from randomColors function to array arr
		arr.push(randomColors());
	}
	return arr;
}
//generating rgb values for random colors
function randomColors(){
	//rgb(255, 0, 0) = red
	var r = Math.floor(Math.random() * 256);
	//rgb(0, 255, 0) = green
	var g = Math.floor(Math.random() * 256);
	//rgb(0, 0, 255) = blue
	var b = Math.floor(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
}

function difficulty(num){
	h1.style.background = "none";
	answer.textContent = "";
	resetbtn.textContent = "New Colors";
	colors = generateRadomColors(num);
	for(var i = 0; i < colorSquare.length; i++){
	//assigning values to colorSquare
	colorSquare[i].style.background = colors[i];
	}
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
}

//function for adding background color to buttons
function btnBackgroundColor(){
	this.classList.add("btnBackground");
}

//function for removing background color from buttons
function removeBtnBackgroundColor(){
	this.classList.remove("btnBackground");
}