
function rollDice(trigger) {

    var randomNumber1 = Math.floor(Math.random() * 6) + 1; // A random number between 1 and 6.
    var randomNumber2 = Math.floor(Math.random() * 6) + 1; // A random number between 1 and 6.

    // Determine h1 according to outcome of randomNumber1 and randomNumber2
    if (randomNumber1 == randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw!";
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩  " + "Player One Wins";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player Two Wins" + "  🚩";
    }

    // Determine dice images according to outcome of randomNumber1 and randomNumber2

    // Use DOM to target Player 1's dice image. Set attribute by concactonating with randomNumber1.
    document.getElementById("dice-player-one").setAttribute("src", "/startingFiles/images/dice" + randomNumber1 + ".png");

    // Use DOM to target Player 2's dice image. Set attribute by concactonating with randomNumber2.
    document.getElementById("dice-player-two").setAttribute("src", "/startingFiles/images/dice" + randomNumber2 + ".png");
}

// Triggered by a clicking event, run rollDice() and change the h1 according to the outcome. 
document.getElementById("onlyButton").addEventListener("click", function (){
    rollDice();
    buttonAnimation();
});

// Triggered by the space bar button press, execute rollDice()
document.addEventListener("keydown", function(event){
   
   if(event.key == " "){
    rollDice(event.key);
    buttonAnimation(event.key);
   }
   else {
       console.log(event.key);
   }
})

// animation when button pressed
function buttonAnimation(input) {
    var activatedButton = document.getElementById("onlyButton");
    activatedButton.classList.add("pressed");

    setTimeout(function() {
        activatedButton.classList.remove("pressed");}, 100);

}






