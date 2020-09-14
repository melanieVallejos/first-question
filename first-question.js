/* 
    Write a function that takes an array of Random Integers as the input and returns an array where all the Even 
    numbers are at the beginning and all the Odd numbers are at the end.
    Solve with O(n) efficiency and O(1) memory

    Time Complexity O(n):
    'n' being the size of the array, I iterate trough the array once.
    Space Complexity O(1):
    The algorithm of swapping the elements by itself matches the given criteria O(1).
*/

const array1 = [2,3,5,6,7,1,9,10,25,20,14,16,17,19];

const sortArrayEvenOdd = (array) => {
    let arrayLength = array.length;
    let j = 0;
    let temp;
    for(var i=0; i < arrayLength; i++){
        if(array[i] % 2 == 0){
            temp = array[j]
            array[j] = array[i]
            array[i] = temp;
            console.log(`swapping el. on index i: ${i} with el. on index j : ${j}`);
            console.log(array);
            j ++;
        }
       }
    return array;
};
   
console.log(sortArrayEvenOdd(array1));
