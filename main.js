/////TAKE AN ARRAY OF ASC NUMBERS////////
/////REMOVE A GIVEN AMOUNT OF THEM //////
/////THEN RETURN THE MISSING PIECES//////
/////IN ASCENDING ORDER /////////////////
// function missingNos(array, k) {
//   let missingNumbers = [];
//   if (missingNumbers.length === k){
//     return missingNumbers;
//   } else {
//     let count = 1;
//     for (let item of array) {
//       if (item === count) {
//         count++;
//       } else {
//         count++;
//         array.splice(item, 0, count);
//         missingNumbers.push(item - 1);
//         return missingNumbers;
//       }
//     }
//   return missingNumbers;
//   }
// }


// console.log(missingNos(testArr, 2));



// function missingNumbers(array, k) {
//   const arraySet = new Set(array);
//   const missingSet = new Set();

// }
// console.log(missingNumbers(testArray, 2));
// console.log(missingNumbers(tester, 5));

// const x = 59865479;

// console.log(x.toString().length);

// console.log(findNumbers(tester));

// function missing(array, k) {
//   let answerArray = [];
//   for (let i = 0; i < array.length + k; i++) {
//     if ((array[i + 1]) - array[i] > 1 && array[i + 1] !== undefined) {
//       answerArray.push(array[i] + 1);
//       // console.log(answerArray);
//     } else if (!array[i]) {
//       answerArray.push(i);
//       // console.log(answerArray);
//     } else if (answerArray.length === k) {
//       return answerArray;
//     }
//   } return answerArray;
// }

// console.log(missing(testArr, 2));
// console.log(missing(test2, 4))
// console.log(testArr[2] - testArr[1] > 1);

// function createComparisonArray(number) {
//   let comparisonArray = Array(number);
//   for (let i = 0; i < comparisonArray.length; i++) {
//     comparisonArray[i] = i + 1;
//   }
//   return comparisonArray;
// }

// console.log(createComparisonArray(15));

// function findMissing(array, k) {
//     let answerArray = [];
//     let compareArray = createComparisonArray((array.length + k));
//     console.log(array);
//     console.log(compareArray);
//     for (let i = 0; i < compareArray.length; i++) {
//       if (array[i] !== compareArray[i]){
//         answerArray.push(compareArray[i]);
//       }
//     }
//     return answerArray;
//   }


// function findMissing(array, k) {
//   let setA = new Set();
//   let setB = new Set();
// }
// console.log(findMissing(testArr, 2));
// console.log(findMissing(test2, 4));



const testArr = [1, 2, 4, 5, 6, 7, 8, 10]; //called with 2: output -> [3, 9]
const perfect = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const test2 = [1, 3, 4, 5, 6, 9];
console.log(testArr.length);
console.log(test2.length);



function findIt(array, k) {
  let setUp = new Set(array);
  let answerSet = new Set();
    for (let i = 1; i < array.length + k + 1; i++) {
      if (!setUp.has(i)) {
        answerSet.add(i);
      }
  }
  let setArray = Array.from(answerSet);
  return setArray;
}

console.log(findIt(testArr, 2));
console.log(findIt(test2, 4));
console.log(findIt(perfect, 2));

////////////////////////solved///////////////////////////////////
/////////////////////////This was a freaking doosey//////////////
/////It looked easy from the jump but it definitely was not//////
///////I left all my failed attempts to create this//////////////
/////algorithm without the use of Set() because maybe////////////
//////////////there's something decent in that trash pile////////