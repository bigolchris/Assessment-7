const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(100);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


//function checking array for sum of 0---
const arr0 = [3];
const arr1 = [4];
const arr2 = [0];
const arr3 = [2, 8, -9, 1];    

const arr = [arr0, arr1, arr2, arr3];

function zeroSum(arr) {

  const out = [];

  for (let i = 0; i < arr.length; i++) {

     let sum = 0;
    const inner = arr[i];

     for (let j = 0; j < inner.length; j++) {

     
     sum += inner[j];
    }
 
    if (sum === 0) {
      out.push(true);
    } else {
      out.push(false);
    }
  }
  return out;
}

console.log(zeroSum(arr));

//function checking for unique characters (true/false)
function isUnique(str) {
    return new Set(str).size == str.length;
  }
  
  console.log(isUnique('monday'));    
  console.log(isUnique('moonday'));



//function checking if string is a pangram
lettersIn = 'abcdefghijklmnopqrstuvwxyz'.split("");

const isPangram = (string) => {
    string = string.toLowerCase();
    return lettersIn.every(x => string.includes(x));
}

//function that returns longest word
function longestStringForLoop(arr) {
    let word = "";
    for (let i = 0; i < arr.length; i++) {
      if (word.length < arr[i].length) {
        word = arr[i];
      }
    }
    return word;
  }
  
  function longestStringReduce(arr) {
    return arr.reduce((a, b) => a.length < b.length ? b : a, "");
  }
  
  console.log(longestStringForLoop(['hi', 'hello']));

console.log(isPangram("I like cats, but not mice"));
console.log(isPangram("The quick brown fox jumps over the lazy dog!"));

console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
