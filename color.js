


//array of 6 colors as strings
//select all of these squares loop through them and then assign each of these color to squares
var colors=["RGB(255, 0, 0)",
            "RGB(255, 255, 0)",
            "RGB(0, 255, 0)",
            "RGB(0, 255, 255)",
            "RGB(0, 0, 255)",
            "RGB(255, 0, 255)"]
            
//first select

var squares=document.querySelectorAll(".square");
var pickedColor=colors[3];

var colorDisplay=document.getElementById("colorDisplay");

colorDisplay.textContent=pickedColor;

for(var i=0;i<squares.length;i++)
{
//add initial colors to squares
squares[i].style.backgroundColor=colors[i];

//ADD click listeners to squares


squares[i].addEventListener("click",function(){

//grab color of the clicked square
var clickedColor=this.style.background;
//compare it with the pickedColor
if(clickedColor===pickedColor)
{
alert("correct");
}
else{
alert("Wrong");
}


});
}





 
