// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(numA, numB) {
    if (numA > numB) {
        console.log(numA);
    } else
        console.log(numB);
}

maxOfTwoNumbers(6, 9)

// Iteration 2 | Find the Longest Word
// const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord() { }

const words = ["mystery", "brother", "aviator", "crocodile", "parangaricutirumicuaro", "pearl", "orchard", "crackpot"];
let wordArr = "";
let positionWord = 0;
let longestWord = 0;

function findLongestWord(words) {

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > wordArr.length) {
            wordArr = words[i];
            positionWord = i;
        } else if (words[i].length == "") {
            return null;
        }
    }
    return words[positionWord];
}

longestWord = findLongestWord(words)
console.log(longestWord);



// Iteration 3 | Sum Numbers
function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i <= numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum;
}

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let total = sumNumbers(numbers);
console.log("The sum is: " + total);


// Numbers Average

function averageNumber(numbers) {
    let sumTotal2 = 0;
    let average = 0;
    for (let j = 0; j < numbers.length; j++) {
        sumTotal2 += numbers[j];
    }
    average = sumTotal2 / numbers.length
    return average;
}

console.log(averageNumber(numbers2));




// Iteration 4 | Numbers Average
function averageNumbers(numbers) {
    let total = sumNumbers(numbers);
    let average = total / numbers.length;
    return average;
}

const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
let avg = averageNumbers(numbers2);




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
let toCheck = "";

function doesWordExist(words2, toCheck) {
    let result = false;
    for (let i = 0; i < words2.length; i++) {
        if (words2[i] == toCheck) {
            result = true;
        }
    }
    return result;
}

doesWordExist(words2, "machine")
console.log(doesWordExist(words2, toCheck));
