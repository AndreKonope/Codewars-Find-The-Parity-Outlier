
/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
*/

var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) { //this loop iterates 8 times during the one iteration of the first loop.
    if ((x + y) % 2 == 0) // (i + j) % 2 == 0 ? board += ' ' : board += '#';
      board += " "; //by first iteration x changes each time and y is 0, in the second iteraation x changes again 8 times and y is 1 and so on.if we have 0+0%2 == 0 it is true that is why we start with an empty sign.later is 1+0%==0 it is false so we get '#'.
    else
      board += "#";
  }
  board += "\n"; // new line after the 2nd loop is done, without it instead of a chessboard, we would have a long line of sings.
}

console.log(board);