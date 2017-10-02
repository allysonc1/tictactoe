
// 

// 1. set up board
// 2. user should be able to click on a button. when that happens, the square should have that player's mark.
// 3. When it's Xs turn, put an x in it. When it's Os turn, put an O in.
// 4. 3 means we need to keep track of who's turn it is.
// When X goes, it becomes O's turn. When O goes, it becomes X's turn.
// 5. Check to see if someone won the game. If so, congratulate them. Otherwise, do nothing.

// GLOBALS
var whosTurn = 1;  // player 1's turn on start

// 2 things happen when someone clicks. 
// 1 - change dom for user. 
// 2. change the vars for JS.

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
	// console.log(squareClicked.innerHTML)
	if (squareClicked.innerHTML !== ' '){
		document.getElementById('message').innerHTML = "Sorry, that square is already taken."
	}else if (whosTurn == 1){
		squareClicked.innerHTML = 'X';
		whosTurn = 2;
		player1Squares.push(squareClicked.id)
		console.log(player1Squares)
		document.getElementById('message').innerHTML = ""		
	}else{
		squareClicked.innerHTML = 'O';
		whosTurn = 1;
		player2Squares.push(squareClicked.id)
		document.getElementById('message').innerHTML = ""		

		console.log(player2Squares)
	}

	checkWin();	
}


function checkWin(){
	// OUTER LOOP - check each winning combination
	for (let i = 0; i < winningCombos.length; i++){
		var squareCount = 0;
		console.log(winningCombos[i], "winningCombos sub i", i)
	// INNER LOOP - check a square inside a winning combination
		for (let j = 0; j < winningCombos[i].length; j++){
			var winningSquare = winningCombos[i][j];
			console.log(winningSquare, "winningSquare")
			if (player1Squares.indexOf(winningSquare) !== -1){
				// the square belongs to the player
				squareCount++;
			}
		}   // end of j loop (row/diag/column complete)
		// check to see if the squareCount = 3
		if (squareCount === 3){
			console.log("player1 won the game");
		}
	}
}


// squares is an array with 9 objects. each object is the js representation of the html tag.
var squares = document.getElementsByClassName('square');
console.log(squares[0]);


for (let i=0; i < squares.length; i++){
	console.log(squares[i])

// Now that we have each square individually (squares[i]), we will add a click listener 

// adding an event liste ner:
// 1. what to listen to:
// 2. addEventListener
// 3. first arg: what event
// 4. second arg: code to run if event happens

squares[i].addEventListener('click', function(event){
	console.log(this);
	// call the mark square function and pass the square they clicked on
	markSquare(this);
});
}








