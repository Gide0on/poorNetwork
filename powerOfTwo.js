//Write a function named isPowerOfTwo(number) that uses a loop to return true if number is a power of two
//(1, 2, 4, 8, 16, ...) and false otherwise. For example, isPowerOfTwo(16) returns true.


function isPowerOfTwo(number){
    while (number >1){
         if (number %2 !==0){
         return false;
         }
         else if (number = number /2);
         }
        return true;
}
console.log (isPowerOfTwo(6));
