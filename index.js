// Github hosted images //
// RED TILE //
var redTileImage = new Image;
var redTile = document.createElement("canvas");
redTile.style.visibility = "hidden";
var ctxR = redTile.getContext("2d");
// var src = "https://raw.githubusercontent.com/jrleja0/tile-swapping-game-jrleja0/master/Image/covent_garden.jpg"
// var src = "file:///Users/jrleja/Documents/Tile%20App%202_4%20Colors/Abstraction_files/Red%20Tile.jpeg";
var srcR = "https://raw.githubusercontent.com/jrleja0/Tile-Abstraction/master/Red%20Tile.jpeg";

redTileImage.crossOrigin = "Anonymous";

redTileImage.onload = function() {
    redTile.width = redTileImage.width;
    redTile.height = redTileImage.height;
    ctxR.drawImage(redTileImage, 0, 0);
}

redTileImage.src = srcR;

// BLUE TILE //
var blueTileImage = new Image;
var blueTile = document.createElement("canvas");
blueTile.style.visibility = "hidden";
var ctxB = blueTile.getContext("2d");
var srcB = "https://raw.githubusercontent.com/jrleja0/Tile-Abstraction/master/Blue%20Tile.jpeg";

blueTileImage.crossOrigin = "Anonymous";

blueTileImage.onload = function() {
    blueTile.width = blueTileImage.width;
    blueTile.height = blueTileImage.height;
    ctxB.drawImage(blueTileImage, 0, 0);
}

blueTileImage.src = srcB;

// GREEN TILE //
var greenTileImage = new Image;
var greenTile = document.createElement("canvas");
greenTile.style.visibility = "hidden";
var ctxG = greenTile.getContext("2d");
var srcG = "https://raw.githubusercontent.com/jrleja0/Tile-Abstraction/master/Green%20Tile.jpeg";

greenTileImage.crossOrigin = "Anonymous";

greenTileImage.onload = function() {
    greenTile.width = greenTileImage.width;
    greenTile.height = greenTileImage.height;
    ctxG.drawImage(greenTileImage, 0, 0);
}

greenTileImage.src = srcG;

// YELLOW TILE //
var yellowTileImage = new Image;
var yellowTile = document.createElement("canvas");
yellowTile.style.visibility = "hidden";
var ctxY = yellowTile.getContext("2d");
var srcY = "https://raw.githubusercontent.com/jrleja0/Tile-Abstraction/master/Yellow%20Tile.jpeg";

yellowTileImage.crossOrigin = "Anonymous";

yellowTileImage.onload = function() {
    yellowTile.width = yellowTileImage.width;
    yellowTile.height = yellowTileImage.height;
    ctxY.drawImage(yellowTileImage, 0, 0);
}

yellowTileImage.src = srcY;
/////////////////////////////////
// END of Github hosted image //




var canvas1 = document.getElementById("tileCanvas1");
var canvas2 = document.getElementById("tileCanvas2");
var canvas3 = document.getElementById("tileCanvas3");
var canvas4 = document.getElementById("tileCanvas4");
var canvasArray = [canvas1, canvas2, canvas3, canvas4];

/*
var redTile = document.getElementById("redTile");
var blueTile = document.getElementById("blueTile");
var greenTile = document.getElementById("greenTile");
var yellowTile = document.getElementById("yellowTile");
*/

//for (var a=0; a < canvasArray.length; a++) {
//}


function start() {

  function tileRotate0(canvas, tileColor) {
    var cx = canvas.getContext("2d");
    cx.clearRect(0, 0, canvas.width, canvas.height);
    cx.drawImage(tileColor, 0, 0, tileColor.width, tileColor.height, 0, 0, canvas.width, canvas.height);
    return tileColor;
  }

  tileRotate0(canvas1, redTile);
  tileRotate0(canvas2, blueTile);
  tileRotate0(canvas3, greenTile);
  tileRotate0(canvas4, yellowTile);


    function tileRotate90(canvas, tileColor) {
      var cx = canvas.getContext("2d");
      cx.save();
      cx.translate(canvas.width, 0);
      cx.rotate(90*Math.PI/180);
      cx.clearRect(0, 0, canvas.height, canvas.width);
      cx.drawImage(tileColor, 0, 0, tileColor.width, tileColor.height, 0, 0, canvas.height, canvas.width);
      cx.restore();
      return tileColor;
    }

    function tileRotate180(canvas, tileColor) {
      var cx = canvas.getContext("2d");
      cx.save();
      cx.translate(canvas.width, canvas.height);
      cx.rotate(180*Math.PI/180);
      cx.clearRect(0, 0, canvas.width, canvas.height);
      cx.drawImage(tileColor, 0, 0, tileColor.width, tileColor.height, 0, 0, canvas.width, canvas.height);
      cx.restore();
      return tileColor;
    }

    function tileRotate270(canvas, tileColor) {
      var cx = canvas.getContext("2d");
      cx.save();
      cx.translate(0, canvas.height);
      cx.rotate(270*Math.PI/180);
      cx.clearRect(0, 0, canvas.height, canvas.width);
      cx.drawImage(tileColor, 0, 0, tileColor.width, tileColor.height, 0, 0, canvas.height, canvas.width);
      cx.restore();
      return tileColor;
    }


  function animateTile(canvas, tileColor, clockwise) {
      if (clockwise) {
        setTimeout(function(){ tileRotate90(canvas, tileColor); }, 1000);
        setTimeout(function(){ tileRotate180(canvas, tileColor); }, 2000);
        setTimeout(function(){ tileRotate270(canvas, tileColor); }, 3000);
        setTimeout(function(){ tileRotate0(canvas, tileColor); }, 4000);
      } else {
        setTimeout(function(){ tileRotate270(canvas, tileColor); }, 1000);
        setTimeout(function(){ tileRotate180(canvas, tileColor); }, 2000);
        setTimeout(function(){ tileRotate90(canvas, tileColor); }, 3000);
        setTimeout(function(){ tileRotate0(canvas, tileColor); }, 4000);
      }
  }

  var tileOneAnimation = setInterval(function(){ animateTile(canvas1, redTile, true); }, 4000);
  // clearInterval(tileOneAnimation);
  setTimeout(function(){ var tileTwoAnimation = setInterval(function(){ animateTile(canvas2, blueTile, false); }, 4000) }, 1000);
  // clearInterval(tileTwoAnimation);
  setTimeout(function(){ var tileThreeAnimation = setInterval(function(){ animateTile(canvas3, greenTile, false); }, 4000) }, 2000);
  // clearInterval(tileThreeAnimation);
  setTimeout(function(){ var tileFourAnimation = setInterval(function(){ animateTile(canvas4, yellowTile, true); }, 4000) }, 3000);
  // clearInterval(tileFourAnimation);

}
