// Please include the correct number of parameters in each function!
// Make sure every function returns something
// You can console.log() the functions with test input to test your functions in the space provided
// Read each question carefully
// Good luck!

/*
Write a function called sumOfOdds that takes in 2 numbers as parameters and sums the odd numbers between them.
This function is inclusive so please include your two parameters in your calculation.
After summing the numbers, return the sum.
You can assume that the 2nd number passed in will always be greater than the first and that the two numbers will not be the same
Note: This problem should account for negative number input
*/

function sumOfOdds(num1, num2){
    let sum = 0;
    for (let i = 0; i <= num2-num1; i++){
        num = num1 + i;
        if (num % 2 === 1 || num % 2 === -1){
            sum += num;
        }
    }
    return sum;
}

/* console.logs to test */
console.log("sumOfOdds");
console.log("////////////////////////////////////////////////////////////////////////////\n");
console.log(sumOfOdds(3, 7));
console.log(sumOfOdds(51, 53));
console.log(sumOfOdds(-4, 5));
console.log(sumOfOdds(-10, 0))

console.log("\n////////////////////////////////////////////////////////////////////////////\n");

/*
Write a function arraySubtract that takes in 2 arrays of numbers and subtracts the item in each index at array 1 with its respective item in each index at array 2.
The result of each calculation should be placed in a new array and that array should be returned when the calculations are complete.
For exmaple arraySubtract([7,9],[2,6]) should return [5,3]
You can assume the arrays that are being input are of the same length
*/

function arraySubtract(array1, array2){
    let array = [];

    for (let i = 0; i < array1.length; i++){
        array.push(array1[i]-array2[i]);
    }
    return array;
}

/* console.logs to test */
console.log("arraySubtract");
console.log("////////////////////////////////////////////////////////////////////////////\n");
console.log(arraySubtract([7,9],[2,6]));
console.log(arraySubtract([10,16],[7,8]));
console.log(arraySubtract([-5,0],[2,6]));

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function that takes in 3 parameters in this order: 1 array, 1 string, and then another string.
Add the first string to the beginning of the array
Add the second string to the end of the array
Return the modified array
*/

function surroundArray(array, str1, str2){
    array.unshift(str1);
    array.push(str2);

    return array;
}

/* console.logs to test */
console.log("surroundArray");
console.log("////////////////////////////////////////////////////////////////////////////\n");
console.log(surroundArray(["cat", "dog", "mouse"], "lion", "bear"));

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function longestString that takes in an array of strings as a parameter and returns the longest string in the array.
If there is nothing in the array, return an empty string ('')
You can assume that no two strings will have the same length in the array
*/

function longestString(array){
    let longest = array[0];
    if (array.length === 0){
        return "";
    }
    
    for (let i = 1; i < array.length; i++){
        if (array[i].length > longest.length){
            longest = array[i];
        } 
    }
    return longest;
}

/* console.logs to test */
console.log("longestString");
console.log("////////////////////////////////////////////////////////////////////////////\n");
console.log(longestString(['lion', 'dog', 'mouse', 'plataypus']));
console.log(longestString([]));
console.log(longestString(['five', 'twenty-nine', 'sixty', 'eight', "hh"]));

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function sToR that replaces every 's' character in the string with an 'r' AND every 'r' character in the string with an 's'
If the letter in the original string is uppercase the letter in the output string should be as well
Do NOT use replaceAll or similar string methods.  If you are unsure what that means, ask before you use a string method!  (toUpperCase() and toLowerCase() should be all you need if anything)
*/

function sToR(str){
    let newStr = "";

    for (let i = 0; i < str.length; i++){
        if (str[i] === "s"){
            newStr += "r";
        } else if (str[i] === "S"){
            newStr += "R";
        } else if (str[i] === "r"){
            newStr += "s";
        } else if (str[i] === "R"){
            newStr += "S";
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}

/* console.logs to test */
console.log("sToR");
console.log("////////////////////////////////////////////////////////////////////////////\n");
console.log(sToR("SssTokpwoRr"));
console.log(sToR("Speed Skating vs Rowing"))

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function divisibleBy4And7 that takes in a number and returns true if it is divisble by both 4 and 7.
If it is not, return false.
*/

function divisibleBy4And7(num){
    if (num % 7 === 0 && num % 4 === 0){
        return true;
    } else {
        return false;
    }
}

/* console.logs to test */
console.log("divisibleBy4And7");
console.log("////////////////////////////////////////////////////////////////////////////\n");
console.log(divisibleBy4And7(17));
console.log(divisibleBy4And7(28));

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function exclamationAndQuestion that takes in a string
return true if the string contains both an exclamation point (!) AND a question mark (?)
Return false if otherwise
*/

function exclamationAndQuestion(str){
    // let exclaim = "!";
    // let question = "?"

    // for (let i = 0; i < str.length; i++){
    //     // if (exclaim.includes(str[i]) && question.includes(str[i])){
    //     //     return true;
    //     // } 

    //     if (str[i] !== "!" || str[i] !== "?"){
    //         return false;
    //     } 
    // }
    // return true;

    let exclaim = "";
    let question = ""

    for (let i = 0; i < str.length; i++){
        if (str[i] === "!"){
            exclaim += str[i]
        } else if (str[i] === "?"){
            question += str[i]
        }
    }

    if (exclaim.length > 0 && question.length >0){
        return true;
    } else {
        return false;
    }
}

/* console.logs to test */
console.log("exclamationAndQuestion");
console.log("////////////////////////////////////////////////////////////////////////////\n");
console.log(exclamationAndQuestion("Hello"));
console.log(exclamationAndQuestion("Hello!"));
console.log(exclamationAndQuestion("Hello?"));
console.log(exclamationAndQuestion("Hello!?"));
console.log(exclamationAndQuestion("Samsung? Anycall?!"));
console.log(exclamationAndQuestion("?????!"));

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function called countAB that takes in a single string and returns an array of length two.  The first item in the array should be the count of every A character in the array.  The 2nd item should be the count of every B character in the array.  
No need to add the count of A and B together.  Again, we want an array with the separate counts of each
Your function should account for both cases (upper and lower) of each letter.
*/

function countAB(str){
    let countA = [];
    let countB = [];
    let countBoth = [];

    for (let i = 0; i < str.length; i++){
        if (str[i] === "a" || str[i] === "A"){
            countA.push(str[i]);
        } else if (str[i] === "b" || str[i] === "B"){
            countB.push(str[i]);
        }
    }

    countBoth.unshift(countA.length);
    countBoth.push(countB.length);

    return countBoth;
}

/* console.logs to test */
console.log("countAB");
console.log("////////////////////////////////////////////////////////////////////////////\n");
console.log(countAB("AaaA dkjsfljwieofj BbB"));
console.log(countAB("AazaA dkAjsfljBBBwieofj BbB"));

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/* 
Write a function called addStringIfLastS() that takes in two parameters.  First, an array of strings and second a single string.  
Go through each string in the array.  If the string ends in the letter 's' (either case), append your string input to that string in the array.
Finally, return your modified array.
Example: addStringIfLastS(['test', 'testing', 'testings'], 'TEST') => ['test', 'testing', 'testingsTEST']
*/

function addStringIfLastS(array, str){
    let newArray = [];

    for (let i = 0; i < array.length; i++){

        let index = array[i];
        
        if (index[index.length-1] === "s" || index[index.length-1] === "S"){
             newArray.push(index + str);
        } else {
            newArray.push(index);
        }

    }

    return newArray;
}

/* console.logs to test */
console.log("addStringIfLastS");
console.log("////////////////////////////////////////////////////////////////////////////\n");
console.log(addStringIfLastS(['test', 'testing', 'testings'], 'TEST'));
console.log(addStringIfLastS(['tests', 'testing', 'testing', 'exam', 'halls', 'halloween'], 'END'));

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/* 
Write a function called twoSmallest that takes in a single array of numbers as a parameter and returns the smallest two numbers in the following array format where the smallest number always comes before the 2nd smallest number (ie, the bigger number should come second): 
[smallestNumber, secondSmallestNumber]
If the array is shorter than length 2, return undefined to the user
You can assume that every number in the array will be unique
*/

function twoSmallest(array){
    smallest = array[0];
    secondSmallest = array[1];

    if (array.length < 2){
        return undefined;
    }

    if (array.length === 2){
        if (array[0] > array[1]){
            smallest = array[1];
            secondSmallest = array[0];
        } 
    }

    for (let i = 1; i < array.length; i++){
        if (array[i] < smallest){
            smallest = array[i];
        }
    }

    for (let i = 0; i < array.length; i++){
        if (array[i] > smallest && array[i] < secondSmallest){
            secondSmallest = array[i];
        }
    }

    let twoNum = [smallest, secondSmallest];
    return twoNum;
}

/* console.logs to test */
console.log("twoSmallest");
console.log("////////////////////////////////////////////////////////////////////////////\n");
console.log(twoSmallest([6]));
console.log(twoSmallest([3, 7]));
console.log(twoSmallest([3, 1]));
console.log(twoSmallest([2, 7, 5]));
console.log(twoSmallest([6, 3, 5, 2, 9]));
console.log(twoSmallest([-1, 3, 5, 2, 22, -20, 39, -4, -7, -10]));

console.log("\n////////////////////////////////////////////////////////////////////////////\n");

