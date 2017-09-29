//every time the page loads its picks 6 random colors and assigns to its div of the square
//1st assign 6 colors which are always the same and then work on randomizing it


//array of 6 colors as strings
//select all of these squares loop through them and then assign each of these color to squares

var colors=[
	        "rgb(255, 0, 0)",
            "rgb(255, 255, 0)",
            "rgb(0, 255, 0)",
            "rgb(0, 255, 255)",
            "rgb(0, 0, 255)",
            "rgb(255, 0, 255)"]
            
//first select

var squares=document.querySelectorAll(".square");

//calling random function here
var pickedColor=pickColor();

//picking the color manually
//var pickedColor=colors[3];
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
//if user guesses wrong then added below messageDisplay.textContent="try again"


colorDisplay.textContent=pickedColor;

for(var i=0;i<squares.length;i++)
{
//add initial colors to squares
squares[i].style.backgroundColor=colors[i];

//ADD click listeners to squares
squares[i].addEventListener("click",function(){
//grab color of the clicked square
var clickedColor=this.style.backgroundColor;
//compare it with the pickedColor
if(clickedColor===pickedColor){
	messageDisplay.textContent="CORRECT!!"
		//calling the function
		changeColors(clickedColor);
	 }

else{
	this.style.backgroundColor="#232323";
	messageDisplay.textContent="TRY AGAIN"
	
}
});
}



//when you click on the correct color all the other squares get the same color
//we write separate function for that taking a single argument-color string
//loop through all squares
 function changeColors(color){
	 
	 for(var i=0;i<squares.length;i++){
		 //change each color to match given color
          squares[i].style.background=color;
	 }
	 
	 
 }
 
//Randomizing the color,pick a random no till last index of the colors array
//that no is used to access the color out of the array and return that no

 function pickColor(){
	var random=Math.floor((Math.random()*colors.length));
	return colors[random];
 }
 


