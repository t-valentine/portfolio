const PUZZLE_HOVER_TINT = '#009900';

const canvas = document.querySelector("#canvas");

const stage = canvas.getContext("2d");

const img = new Image();

let difficulty = 5;

let pieces;

let puzzleWidth;

let puzzleHeight;

let pieceWidth;

let pieceHeight;

let currentPiece;

let currentDropPiece;

let mouse;

const createMessage = (msg) => {
    document.getElementById("puzzleInfo").innerHTML = msg;
}

const initPuzzle = () => {
    pieces = [];
    mouse = {
      x: 0,
      y: 0
    };
    currentPiece = null;
    currentDropPiece = null;
    stage.drawImage(
      img,
      0,
      0,
      puzzleWidth,
      puzzleHeight,
      0,
      0,
      puzzleWidth,
      puzzleHeight
    );
    buildPieces();
  }
  
  const setCanvas = () => {
    canvas.width = puzzleWidth;
    canvas.height = puzzleHeight;
    canvas.style.border = "none";
  }
  
  const buildPieces = () => {
    let i;
    let piece;
    let xPos = 0;
    let yPos = 0;
    for (i = 0; i < difficulty * difficulty; i++) {
      piece = {};
      piece.sx = xPos;
      piece.sy = yPos;
      pieces.push(piece);
      xPos += pieceWidth;
      if (xPos >= puzzleWidth) {
        xPos = 0;
        yPos += pieceHeight;
      }
    }
    shufflePuzzle();
  }
  
  const shufflePuzzle = () => {
    pieces = shuffleArray(pieces);
    stage.clearRect(0, 0, puzzleWidth, puzzleHeight);
    let xPos = 0;
    let yPos = 0;
    for (const piece of pieces) {
      piece.xPos = xPos;
      piece.yPos = yPos;
      stage.drawImage(
        img,
        piece.sx,
        piece.sy,
        pieceWidth,
        pieceHeight,
        xPos,
        yPos,
        pieceWidth,
        pieceHeight
      );
      stage.strokeRect(xPos, yPos, pieceWidth, pieceHeight);
      xPos += pieceWidth;
      if (xPos >= puzzleWidth) {
        xPos = 0;
        yPos += pieceHeight;
      }
    }
    document.onpointerdown = onPuzzleClick;
  }
  
  const checkPieceClicked = () => {
    for (const piece of pieces) {
      if (
        mouse.x < piece.xPos ||
        mouse.x > piece.xPos + pieceWidth ||
        mouse.y < piece.yPos ||
        mouse.y > piece.yPos + pieceHeight
      ) {
        //PIECE NOT HIT
      } else {
        return piece;
      }
    }
    return null;
  }
  
const updatePuzzle = (e) => {
    currentDropPiece = null;
    if (e.layerX || e.layerX == 0) {
      mouse.x = e.layerX - canvas.offsetLeft;
      mouse.y = e.layerY - canvas.offsetTop;
    } else if (e.offsetX || e.offsetX == 0) {
      mouse.x = e.offsetX - canvas.offsetLeft;
      mouse.y = e.offsetY - canvas.offsetTop;
    }
    stage.clearRect(0, 0, puzzleWidth, puzzleHeight);
    for (const piece of pieces) {
      if (piece == currentPiece) {
        continue;
      }
      stage.drawImage(
        img,
        piece.sx,
        piece.sy,
        pieceWidth,
        pieceHeight,
        piece.xPos,
        piece.yPos,
        pieceWidth,
        pieceHeight
      );
      stage.strokeRect(piece.xPos, piece.yPos, pieceWidth, pieceHeight);
      if (currentDropPiece == null) {
        if (
          mouse.x < piece.xPos ||
          mouse.x > piece.xPos + pieceWidth ||
          mouse.y < piece.yPos ||
          mouse.y > piece.yPos + pieceHeight
        ) {
          //NOT OVER
        } else {
          currentDropPiece = piece;
          stage.save();
          stage.globalAlpha = 0.4;
          stage.fillStyle = PUZZLE_HOVER_TINT;
          stage.fillRect(
            currentDropPiece.xPos,
            currentDropPiece.yPos,
            pieceWidth,
            pieceHeight
          );
          stage.restore();
        }
      }
    }
    stage.save();
    stage.globalAlpha = 0.6;
    stage.drawImage(
      img,
      currentPiece.sx,
      currentPiece.sy,
      pieceWidth,
      pieceHeight,
      mouse.x - pieceWidth / 2,
      mouse.y - pieceHeight / 2,
      pieceWidth,
      pieceHeight
    );
    stage.restore();
    stage.strokeRect(
      mouse.x - pieceWidth / 2,
      mouse.y - pieceHeight / 2,
      pieceWidth,
      pieceHeight
    );
  }
  
  const onPuzzleClick = (e) => {
    if (e.layerX || e.layerX === 0) {
      mouse.x = e.layerX - canvas.offsetLeft;
      mouse.y = e.layerY - canvas.offsetTop;
    } else if (e.offsetX || e.offsetX === 0) {
      mouse.x = e.offsetX - canvas.offsetLeft;
      mouse.y = e.offsetY - canvas.offsetTop;
    }
    currentPiece = checkPieceClicked();
    if (currentPiece !== null) {
      stage.clearRect(
        currentPiece.xPos,
        currentPiece.yPos,
        pieceWidth,
        pieceHeight
      );
      stage.save();
      stage.globalAlpha = 0.9;
      stage.drawImage(
        img,
        currentPiece.sx,
        currentPiece.sy,
        pieceWidth,
        pieceHeight,
        mouse.x - pieceWidth / 2,
        mouse.y - pieceHeight / 2,
        pieceWidth,
        pieceHeight
      );
      stage.restore();
      document.onpointermove = updatePuzzle;
      document.onpointerup = pieceDropped;
    }
  }
  
  const pieceDropped = (e) => {
    document.onpointermove = null;
    document.onpointerup = null;
    if (currentDropPiece !== null) {
      let tmp = {
        xPos: currentPiece.xPos,
        yPos: currentPiece.yPos
      };
      currentPiece.xPos = currentDropPiece.xPos;
      currentPiece.yPos = currentDropPiece.yPos;
      currentDropPiece.xPos = tmp.xPos;
      currentDropPiece.yPos = tmp.yPos;
    }
    resetPuzzleAndCheckWin();
  }
  
  
  
  const resetPuzzleAndCheckWin = () => {
    stage.clearRect(0, 0, puzzleWidth, puzzleHeight);
    let gameWin = true;
    for (piece of pieces) {
      stage.drawImage(
        img,
        piece.sx,
        piece.sy,
        pieceWidth,
        pieceHeight,
        piece.xPos,
        piece.yPos,
        pieceWidth,
        pieceHeight
      );
      stage.strokeRect(piece.xPos, piece.yPos, pieceWidth, pieceHeight);
      if (piece.xPos != piece.sx || piece.yPos != piece.sy) {
        gameWin = false;
      }
    }
    if (gameWin) {
      createMessage("You win! Here's the full image! You can refresh the page or choose another image to play again.");
      stage.drawImage(
		img,
		0,
		0,
		puzzleWidth,
		puzzleHeight,
		0,
		0,
		puzzleWidth,
		puzzleHeight

	);
    }
  }
  
  const shuffleArray = (o) => {
    for (
      var j, x, i = o.length;
      i;
      j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  }

const generatePuzzle = () => {
    pieceWidth = Math.floor((img.width) / difficulty);
    pieceHeight = Math.floor(img.height / difficulty);
    puzzleWidth = pieceWidth * difficulty;
    puzzleHeight = pieceHeight * difficulty;
    setCanvas();
    initPuzzle();
}


const switchImage = () => {
    let selection = document.getElementById('selectImage').value;
    let infoSection = document.getElementById("info");
    infoSection.className = "info_content";

    switch (selection) {
        case "milk_pinup":
            createMessage("Okay- good luck making 'Milk! pinups.'");
            img.src = "./img/secret/milkpinup.png";
            generatePuzzle();
            break;
        case "s_dinner": 
            createMessage("Oooh, you want to see a WIP? Ok- here's 'Strahd's Dinner'!");
            img.src = "./img/secret/strahddinner.png";
            generatePuzzle();
            break;
        case "v_comic":
            createMessage("This is a half-baked comic alright...");
            img.src = "./img/secret/vikcomic.png";
            generatePuzzle();
            break;
        default:
            result.append(" ");
    }
  }


window.addEventListener("load", (event) => {
  img.src = "./img/secret/default.png";
  generatePuzzle();
});