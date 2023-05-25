function diceRoll() {
  // Blue
  var diceRollBlue = Math.floor( Math.random() * 6 ) + 1;
  var randomDiceImageBlue = "diceBlue" + diceRollBlue + ".png"; //diceBlue1.png - diceBlue6.png
  var randomImageSourceBlue = "imgs/" + randomDiceImageBlue; //imgs/diceBlue1.png - imgs/diceBlue6.png
  var imageBlue = document.querySelectorAll("img")[2];
  imageBlue.setAttribute("src", randomImageSourceBlue);
  document.querySelectorAll("img")[2].setAttribute("src", randomImageSourceBlue);

  // Green
  var diceRollGreen = Math.floor( Math.random() * 6 ) + 1;
  var randomDiceImageGreen = "diceGreen" + diceRollGreen + ".png"; //diceBlue1.png - diceBlue6.png
  var randomImageSourceGreen = "imgs/" + randomDiceImageGreen; //imgs/diceBlue1.png - imgs/diceBlue6.png
  var imageGreen = document.querySelectorAll("img")[3];
  imageGreen.setAttribute("src", randomImageSourceGreen);
  document.querySelectorAll("img")[3].setAttribute("src", randomImageSourceGreen);

  // Yellow
  var diceRollYellow = Math.floor( Math.random() * 6 ) + 1;
  var randomDiceImageYellow = "diceYellow" + diceRollYellow + ".png"; //diceBlue1.png - diceBlue6.png
  var randomImageSourceYellow = "imgs/" + randomDiceImageYellow; //imgs/diceBlue1.png - imgs/diceBlue6.png
  var imageYellow = document.querySelectorAll("img")[4];
  imageYellow.setAttribute("src", randomImageSourceYellow);
  document.querySelectorAll("img")[4].setAttribute("src", randomImageSourceYellow);

  // Red
  var diceRollRed = Math.floor( Math.random() * 6 ) + 1;
  var randomDiceImageRed = "diceRed" + diceRollRed + ".png"; //diceBlue1.png - diceBlue6.png
  var randomImageSourceRed = "imgs/" + randomDiceImageRed; //imgs/diceBlue1.png - imgs/diceBlue6.png
  var imageRed = document.querySelectorAll("img")[5];
  imageRed.setAttribute("src", randomImageSourceRed);
  document.querySelectorAll("img")[5].setAttribute("src", randomImageSourceRed);

  // White 1
  var diceRollWhite1 = Math.floor( Math.random() * 6 ) + 1;
  var randomDiceImageWhite1 = "diceWhite1" + diceRollWhite1 + ".png"; //diceBlue1.png - diceBlue6.png
  var randomImageSourceWhite1 = "imgs/" + randomDiceImageWhite1; //imgs/diceBlue1.png - imgs/diceBlue6.png
  var imageWhite1 = document.querySelectorAll("img")[6];
  imageWhite1.setAttribute("src", randomImageSourceWhite1);
  document.querySelectorAll("img")[6].setAttribute("src", randomImageSourceWhite1);

  // White 2
  var diceRollWhite2 = Math.floor( Math.random() * 6 ) + 1;
  var randomDiceImageWhite2 = "diceWhite2" + diceRollWhite2 + ".png"; //diceBlue1.png - diceBlue6.png
  var randomImageSourceWhite2 = "imgs/" + randomDiceImageWhite2; //imgs/diceBlue1.png - imgs/diceBlue6.png
  var imageWhite2 = document.querySelectorAll("img")[7];
  imageWhite2.setAttribute("src", randomImageSourceWhite2);
  document.querySelectorAll("img")[7].setAttribute("src", randomImageSourceWhite2);
}
  //alert('You rolled a ' + diceRollBlue);
document.getElementById("roll").onclick = function() {
    diceRoll();
};

window.onload=function(){
   document.getElementById("roll").click();
 };
