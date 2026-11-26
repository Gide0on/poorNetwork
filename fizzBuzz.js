/*Write a function named fizzBuzz(number) that returns "FizzBuzz" if number is divisible by 3 and 5, "Fizz" if by 3
only, "Buzz" if by 5 only, and otherwise the number as a string. For example, fizzBuzz(15) returns "FizzBuzz".*/

function fizzBuzz(number){
    if (number %3==0 && number %5 ==0){
        return "fizzBuzz";
      }
    else if (number %5 ==0){
        return "buzz";
    }
    else if (number %3 ==0){
        return "fizz";
    }
}
const prompt = require("prompt-sync")();
let number = prompt("Enter a number: ");
    console.log (fizzBuzz(number));
