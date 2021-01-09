
function myFunction() {

    var randomNumber1 = Math.floor(Math.random() * 6) + 1; // A random number between 1 and 6.
    var randomNumber2 = Math.floor(Math.random() * 6) + 1; // A random number between 1 and 6.


    if (randomNumber1 == randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw!";
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩  " + "Player One Wins";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player Two Wins" + "  🚩";
    }

    // Use DOM to target Player 1's dice image. Set attribute by concactonating with randomNumber1.
    document.getElementById("dice-player-one").setAttribute("src", "/startingFiles/images/dice" + randomNumber1 + ".png");

    // Use DOM to target Player 2's dice image. Set attribute by concactonating with randomNumber2.
    document.getElementById("dice-player-two").setAttribute("src", "/startingFiles/images/dice" + randomNumber2 + ".png");
}

// Triggered by a clicking event, run myFunction() and change the h1 according to the outcome. 
document.getElementById("onlyButton").addEventListener("click", myFunction);







