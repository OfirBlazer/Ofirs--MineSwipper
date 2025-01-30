var gBoard = [];
("use strict");
var gLevel = {
  SIZE: 4,
  MINES:2
};
var gGame = {
  isOn: false,
  shownCount: 0, //////cells are opend
  markedCount: 0,
  secsPassed: 0,
};

const MINE = "🧨";
const BLOCK = "block";
var lives = 3
function oninit() {
  
  lives = 3
  document.querySelector('h2 span').innerText = lives
console.log();

  var emoji = document.querySelector('.restart')
  
     emoji.innerText = '😃' 
  buildBoard();
  setMinesNegsCount(2, 1, gBoard);
  renderBoard(gBoard);
  checkGameOver()
  if (lives === 0){
    return checkGameOver()
  }
  
}

function buildBoard() {
  var size = gLevel.SIZE; ////// גודל הלוח
  const board = createMat(size, size);

  for (var i = 0; i < board.length; i++) {
    gBoard[i] = [];

    for (var j = 0; j < board.length; j++) {
      gBoard[i][j] = {
        minesAroundCount: 0,
        isShown: false,
        isMine: false,
        isMarked: false,
        
      };
      // gBoard[i][j].isShown = true;
    }
  }
  randomMine(gBoard)
  // randomMine()
  // gBoard[randNum][randNum].isMine = true;
  // gBoard[2][2].isMine = true;
  // gBoard[1][2].isMine = true;

  return board;
}

function renderBoard(board) {
  console.log(board);
  
  var size = gLevel.SIZE;
  var strHTML = "<table><tbody>";
  for (var i = 0; i < size; i++) {
    strHTML += "<tr>";
    for (var j = 0; j < size; j++) {
      const cell = board[i][j];
      // const className = `cell-${i}-${j}`
      var cellClass = getClassName({ i: i, j: j });
      // console.log(className);
      // if (cell.type === MINE) cellClass += " 🧨";
      var cellContent = ''
      if (cell.isShown){
        if (cell.isMine) cellContent = '🧨'
        
        else if (cell.minesAroundCount) cellContent = cell.minesAroundCount
            
        
      }
      // console.log(cellContent);
      // console.log(cellClass);

      strHTML += `<td class="${cellClass}" onclick="onCellClicked(this,${i},${j})">${cellContent}</td>`;
    }

    strHTML += "</tr>";
  }
  strHTML += `</tbody></table>`;
  // console.log(strHTML);

  const elBoard = document.querySelector(".board");
  elBoard.innerHTML = strHTML;
}

function getClassName(location) {
  const cellClass = `cell-${location.i}-${location.j}`;
  return cellClass;
}
// console.log(getClassName);
function setMinesNegsCount(posI, posJ, board) {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      var currCell = board[i][j];
      currCell.minesAroundCount = getMinesCount({ i: i, j: j });

    }
  }

  // var posI = board[i]
  // var posJ = gBoard[j]
}
// console.log(board);

function getMinesCount(pos) {
  var counter = 0

  for (var i = pos.i - 1; i <= pos.i + 1; i++) {
    if (i < 0 || i > gBoard.length - 1) continue;

    for (var j = pos.j - 1; j <= pos.j + 1; j++) {
      if (j < 0 || j > gBoard.length - 1) continue;

      var currCell = gBoard[i][j];
      // console.log(currCell);
      if (currCell.isMine) {
        counter ++
      }
    }
  }
  
  return counter
}
////// count boomb negi

function onCellClicked(elCell, i, j) {
  var cell = gBoard[i][j] 
  cell.isShown = true
  console.log(cell);
     elCell.style.backgroundColor = '#F1D4A1';
     elCell.innerText = cell.minesAroundCount
     cell.isShown = true
     if (cell.isMine === true){
      elCell.innerHTML = MINE      
      lives--
      document.querySelector('h2 span').innerText = lives
      console.log(lives);
      
    }
    
    if (lives === 0){
      
      var emoji = document.querySelector('.restart')
      emoji.innerText = '🤯' 
      console.log ('no lives left')
      
      
    }
    // renderBoard(gBoard)
    // console.log(elCell);
    
    
  }
  renderBoard(gBoard)
  
  function onCellMarcked(elCell) {
    ///// on right click
}
function checkGameOver(){


  
}
    function isWin(board){

      
    }

function expandShown(board, elCell) {}




  



function randomMine(board) {
  const size = gLevel.SIZE;
  const mines = gLevel.MINES;

  var minesCounter = 0;

  while (minesCounter < mines) {
    var num1 = getRandomInt(0, size);
    var num2 = getRandomInt(0, size);
    // console.log(num1);
    // console.log(num2);

    if (!board[num1][num2].isMine) {
      board[num1][num2].isMine = true;
      minesCounter++;
    }
    
    
  }
}
      
  
      
      
      
        
        
      
        
      
      
    


  

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}
