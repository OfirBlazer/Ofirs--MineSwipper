var gBoard = [];
("use strict");
var gLevel = {
  SIZE: 4,
  MINES: 2,
};
var gGame = {
  isOn: false,
  shownCount: 0, //////cells are opend
  markedCount: 0,
  secsPassed: 0,
};

const MINE = "🧨";
const BLOCK = "block";




function oninit() {
  // console.log("hi");
  var cellClass
  buildBoard();
  renderBoard(gBoard);
  
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
    }
  }
  gBoard[2][2].isMine = true;
  gBoard[2][1].isMine = true;
  
  setMinesNegsCount(2,1,gBoard)
  return board;
}

function renderBoard(board) {
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
      var checkMine = cell.isMine ? "🧨" : "";
      // console.log(checkMine);
      // console.log(cellClass);

      strHTML += `<td class="${cellClass}" onclick="onCellClicked(this,${i},${j})">${checkMine}</td>`;
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
/// 2 1
function setMinesNegsCount(posI,posJ,board){
var minesAroundCount = 0
  
  
  // var posI = board[i]
  // var posJ = gBoard[j]
  
  
  
  
  for (var i = 0; i <board.length; i++){
    
    for (var j = 0; j <board[i].length; j++){

        // console.log(board[i][j])
        
      




    }  
    
    // console.log(board);
    
    
    var minesAroundCount = 0;
    // var cellClass = gBoard[i][j]
    
    
    ////// count boomb negi
  }
    return
}
onCellClicked()
function onCellClicked(elCell, i, j)  {

  console.log(i,j);
  

  // console.table(gBoard);
}
function onCellMarcked(elCell) {
  ///// on right click
}
function checkGameOver() {}
function expandShown(board, elCell) {}
