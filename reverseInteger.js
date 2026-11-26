/*Write a function named reverseInteger(number) that uses a loop to reverse the digits of number and keep
its sign, without converting it to a string. For example, reverseInteger(-123) returns -321.*/

function reverseInteger(number){
	
	let reverse = 0;
	if (number >0){
	while (number>0) {
		reverseOne = number % 10;
		reverse =reverse * 10 + reverseOne;
		number = Math.floor(number/10);
	}
	}
	else {
	    reverseOne = (number % 10);
	    reverse = reverseOne;
	    number = Math.floor(number/-10);
	    while (number>0) {
		reverseSingular = number % 10;
		reverse =reverse * 10 - reverseOne;
		number = Math.floor(number/10);
	}
	}
	    return reverse
}
let result = reverseInteger(7564);
console.log (result);
