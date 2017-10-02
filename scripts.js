
// 1. set up board
// 2. user should be able to click on a button. when that happens, the square should have that player's mark.
// 3. When it's Xs turn, put an x in it. When it's Os turn, put an O in.
// 4. 3 means we need to keep track of who's turn it is.
// When X goes, it becomes O's turn. When O goes, it becomes X's turn.
// 5. Check to see if someone won the game. If so, congratulate them. Otherwise, do nothing.

// GLOBALS
var whosTurn = 1;  // player 1's turn on start
var gameOver = false;
var player1Squares = [];
var player2Squares = [];  // or create an object and put these two vars inside it 
var winningCombos = [
	['A1', 'B1', 'C1'], // ROW 1
	['A2', 'B2', 'C2'],	// ROW 2
	['A3', 'B3', 'C3'],	// ROW 3
	['A1', 'A2', 'A3'],	// COLUMN 1
	['B1', 'B2', 'B3'],	// COLUMN 2
	['C1', 'C2', 'C3'], // COLUMN 3
	['A1', 'B2', 'C3'], // DIAG 1
	['A3', 'B2', 'C3'], // DIAG 2
];

function markSquare(squareClicked){
	if (squareClicked.innerHTML !== '-'){
		document.getElementById('message').innerHTML = "Sorry, that square is already taken."
	}else if (whosTurn == 1){
		squareClicked.innerHTML = 'X';
		whosTurn = 2;
		player1Squares.push(squareClicked.id)
		// console.log(player1Squares)
		document.getElementById('message').innerHTML = `${squareClicked.id}`	
		checkWin(player1Squares, 1);		
	}else{
		squareClicked.innerHTML = 'O';
		whosTurn = 1;
		player2Squares.push(squareClicked.id)
		document.getElementById('message').innerHTML = `${squareClicked.id}`			
		checkWin(player2Squares, 2);	
		// console.log(player2Squares)
	}
}		// end markSquare

function checkWin(currentPlayerSquares,whoJustMarked ){
	for (let i = 0; i < winningCombos.length; i++){
		var squareCount = 0;
		// console.log(winningCombos[i], "winningCombos sub i", i)
		for (let j = 0; j < winningCombos[i].length; j++){
			var winningSquare = winningCombos[i][j];
			// console.log(winningSquare, "winningSquare", winningCombos[i].length, "length of current combo")
			if (player1Squares.indexOf(winningSquare) !== -1){
				squareCount++;
			}
		}   // end of j loop (row/diag/column complete)
		if (squareCount === 3){
			endGame(winningCombos[i], whoJustMarked);
			break;
		}
	}
}		// end checkWin(); function

function endGame(winningCombo, whoJustMarked){
	console.log(`player ${whoJustMarked} won the game`);
	gameOver = true;
	
	for (let i = 0; i < winningCombo.length; i++) {
		// var theSquare = document.getElementById(winningCombo[i])
		// console.dir(theSquare)
		document.getElementById(winningCombo[i]).className += 'winning-square';
	}
}		// end endGame(); function

var squares = document.getElementsByClassName('square');

for (let k=0; k < squares.length; k++){
	//console.log(squares, squares.length, i)

	squares[k].addEventListener('click', function(event){
		if(gameOver){
			console.log(gameover, "game is over");
			
		}else{
			markSquare(this);
			console.log("GAMES NOT OVER", gameOver);
		}
	});
}








