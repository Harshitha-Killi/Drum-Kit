
var numberOfButtons= document.querySelectorAll(".drum").length;

for(i=0; i<numberOfButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click",function(){

console.log(this.style.color="white");

});
}

/*document.querySelectorAll(".set button").addEventListener("click",eventcall);

function eventcall(){
  alert("I got clicked");
}*/

//  var finalAudio = new Audio("sounds/tom-1.mp3");
//  finalAudio.play();
