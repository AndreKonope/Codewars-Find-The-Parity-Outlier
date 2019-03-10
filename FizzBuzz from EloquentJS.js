/*
FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
*/

for(let i = 0; i <= 100; i++){
 let output = '';
    if(i % 3 == 0){
    output += 'Fizz';
 } else if (i % 5 == 0 && i % 3 !== 0){
        output += 'Buzz';    
 }
 console.log(output || i);
}

/*
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/
// Add this line of code above the console.log()

 } else if(i % 3 == 0 && i % 5 == 0){
        output += 'FizzBuzz';
 }
 console.log(output || i);
}

// solution from the book for the last scenario (FizzBuzz):

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
