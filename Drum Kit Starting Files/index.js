// Create array of all buttons with class "drum"
var drumButtonList = document.querySelectorAll(".drum");


// addEventListener for CLICK to every button by looping through the array
for (var i = 0; i < drumButtonList.length; i++) {
    drumButtonList[i].addEventListener("click", function(){

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
       
    })   
}

// Responding to key presses

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})



// Write function with Switch Case for all buttons and corresponding sounds 

function makeSound(trigger) {

switch (trigger) {
    case "w":
        var crash = new Audio("/sounds/crash.mp3");
        crash.play();
        break;

    case "a":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

    case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

    case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

    case "j":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

    case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

    case "l":
        var tom4 =  new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

    default:
        console.log("Fault");
    }

}


// Make button flash when pressed

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");}, 100);
}

