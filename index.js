// Wait for the DOM to be loaded
document.addEventListener('DOMContentLoaded', () => {
    const diceRollSound = document.getElementById('diceRollSound');
    const image1 = document.querySelectorAll("img")[0];
    const image2 = document.querySelectorAll("img")[1];
    const rollButton = document.getElementById('rollButton');
  
    const diceImages = [
      "dice1.png",
      "dice2.png",
      "dice3.png",
      "dice4.png",
      "dice5.png",
      "dice6.png"
    ];
  
    function playDiceRollSound() {
      diceRollSound.play();
    }
  
    function rollDice() {
      const randomNumber1 = Math.floor(Math.random() * 6) + 1;
      const randomSourceImage = "images/dice" + randomNumber1 + ".png";
      image1.setAttribute("src", randomSourceImage);
  
      const randomNumber2 = Math.floor(Math.random() * 6) + 1;
      const randomSourceImage2 = "images/dice" + randomNumber2 + ".png";
      image2.setAttribute("src", randomSourceImage2);
  
      // Play the dice rolling sound
      playDiceRollSound();
  
      // Determine the winner and display the result
      if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
      } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
      } else {
        document.querySelector("h1").innerHTML = " 🟰 Draw! 🟰 ";
      }
    }
  
    // Add a click event listener to the new button
    rollButton.addEventListener('click', rollDice);
  });
  