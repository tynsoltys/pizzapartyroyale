
// A Card Game Challenge (Pizza Party Royale) for Shoelace
// By Tyn!

/* Assumptions:
1) There are 52 Cards in the deck, for a medium amount of fun, let's assume there are 4 sets of cards numbered 1-13.
2) If there is a tie, nothing happens and the next round commences.
3) The game ends when no cards are left.

*/


console.log(`
  **********************************
    WELCOME TO 🍕🍕🍕  PARTY ROYALE
  **********************************

In this game, two fierce competitors, P1 and P2 
compete in a war-style card game to see who pays for 'za.

Over the course of 26 riveting rounds, each player flips 
the top card from a shuffled deck to reveal
their fate. Highest integer wins the round, highest total 
wins the game and gets their pizza paid for.


   BEHOLD: THE RESULTS!!!!
`);
//.. sorry for ugly syntax of ES6 backticks but I'm trying to get used to them

function initGame() {

	// Declare app scope variables
	let player1score = 0;
	let player2score = 0;
	let deck = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13];
	let deck1 = [];

	// Trigger the cascade of functions
	shuffleDeck(deck);


	// FUNCTION DECLARATIONS

	// PART ONE: Shuffling and Cutting the Deck
		// Randomize the array of cards in the deck
		function shuffleDeck(array) {
		    for (let i = array.length - 1; i > 0; i--) {
		        let j = Math.floor(Math.random() * (i + 1));
		        // Love this ES6 swapperoo thing!!
		        [array[i], array[j]] = [array[j], array[i]];
		   }
		   // Cut the deck in half and assign to existing app variable
		   deck1 = deck.splice(0,deck.length/2);
		   // once done trigger game
		   playGame();
		   
		}

	// PART TWO: Playing the Game
		// Function for running the rounds of the game.
		function playGame() {

			// Declaring number of initial rounds as a const because length of arrays will be modified with each iteration
			const roundsOfGame = deck.length;

			// Game play loop
			for (let i = 0; i < roundsOfGame ; i++) {
					let player1card = deck.pop();
					let player2card = deck1.pop();

					// Determine winner of round & increment running score
					function scorer(thing,thing1) { 
						if (thing > thing1) {
							player1score++;
							return 'PLAYER 1';
						} else if (thing < thing1) {
							player2score++;
							return 'PLAYER 2';
						} else {
							return 'NOBODY';
						}
					}	
					let roundWin = scorer(player1card,player2card);

					console.log(`
ROUND ${ (i+1) } CARDS  -->     P1:${player1card} |  P2:${player2card}  | WINNER: ${roundWin}`);

					console.log(`RUNNING SCORE   -->         P1: ${player1score} | P2: ${player2score} `);
		}

			// When done playing game declare winner
console.log(`
🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕
             SO MUCH FREE PIZZA FOR ${gameWinner(player1score,player2score)}
🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕 🍕`);

		};

// PART THREE: Declaring the Winner
// Noted: Fxn very similar to scorer() above except does not increment score....
// so not ideal case for utility function reuse but want to declare that I know what that is and see patterns 👍 lolol.
		function gameWinner(thing,thing1) { 
			if (thing > thing1) {
				return 'PLAYER 1';
			} else if (thing < thing1) {
				return 'PLAYER 2';
			} else {
				return 'NOBODY';
			}
		}	

}

// Initialize Game App
initGame();

