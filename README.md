# odin_rps

The goal of this project is to create a functioning game of Rock, Paper, Scissors in Javascript.

Below is pseudocode to outline how to complete the project.

Create a function called “getComputerChoice” that will randomly return Rock, 
Paper or Scissor.
		
		This function will operate on a random number generator (0, 1, or 2)

		That variable will be fed into an if else function to determine the choice, “if 
		GCC = 0 variable is rock, if 1 is paper, etc.”

Create a function called playRound that plays one round of RPS. This function should accept two parameters: playerSelection & computerSelection. It should then return a result as a string that declares the winner or tie: “You lose! Paper beats Rock” etc.

playerSelection should be case insensitive to allow “rock, Rock, RoCk, ROCK”

		This function will compare the playerSelection & computerSelection 
		parameters through a series of if else statements. Ex. If playerSelection = 
		rock && computerSelection = paper return “you lose…etc.”

		This should include all permutations of playerSelection & 	
		computerSelection including if an invalid value playerSelection is entered

		playRound should also increment a round counter variable with each 
		game

Create a function called playGame which calls playRound a total of 5 times.
	After 5 rounds, playGame returns a score and declares a winner.
