/*Write a function named hammingWeight(number) that uses a loop to return the number of 1s in the binary
form of number, without converting it to a string. For example, hammingWeight(11) returns 3 (1011 in binary).*/


function hammingWeight(number) {
    let binaryNumber = 0;
    let counter = 1
    while (number > 0 ) {
    let digit = number % 2;
    binaryNumber += digit;
    number = number/2;
    number = Math.floor(number);
    }
    return binaryNumber;
}
console.log(hammingWeight(11))
