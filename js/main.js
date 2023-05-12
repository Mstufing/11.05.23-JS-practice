
// ? -------Array-------
// ? Task #1
// ? Add the Index

// function addIndexes(arr) {
//     let myArr = [];
//     myArr = arr.map((elem, index) => Number(elem) + Number(index));
//     return myArr;
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let myInp1 = document.querySelector(".inp1");
//     let myResult = document.querySelector(".result");

//     let myArr = myInp1.value.trim().split(" ");
//     myResult.innerHTML = addIndexes(myArr);
// }


// ? Task #2
// ? Filter Strings from Array
// ! Function works but DOM doesn't ? What's wrong ? Check it !

// function filterArray(arr) {
//     return arr.filter(elem => typeof elem == "number" && Number.isInteger(elem));
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let myInp1 = document.querySelector(".inp1");
//     let myResult = document.querySelector(".result");

//     let myArr = myInp1.value.trim().split(" ");
//     myResult.innerHTML = filterArray(myArr);
// }


// ? Task #3
// ? True Ones, False Zeros

// function integerBoolean(n) {
//     let arr = [...n];
//     return arr.map(elem => elem == 1 ? true : false);
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let myInp1 = document.querySelector(".inp1");
//     let myResult = document.querySelector(".result");

//     let myArr = myInp1.value.trim().split(" ");
//     myResult.innerHTML = integerBoolean(myArr);
//     console.log(myArr)
// }


// ? Task #4
// ? Tallest Birthday Cake Candles

// function birthdayCakeCandles(candles) {
//     let myArr = [];
//     myArr = candles.filter(elem => elem == Math.max(...candles));
//     return myArr.length;
// }

// let myButton = document.querySelector(".my-button");

// myButton.onclick = () => {
//     let candlesInpute = document.querySelector(".candles-inpute");
//     let result = document.querySelector(".result");

//     let arr = candlesInpute.value.trim().split(" ");

//     result.innerHTML = birthdayCakeCandles(arr);
// }

// ? Task #5
// ? Largest Numbers
// ! Function works but DOM doesn't ? What's wrong ? Check it !

// function largestNumbers(n, arr) {
//     arr.sort();
//     return arr.slice(-n);
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inp1 = document.querySelector(".inp1");
//     let inp2 = document.querySelector(".inp2");
//     let result = document.querySelector(".result");
//     let myArr = inp2.value.trim().slice(" ");
//     result.innerHTML = largestNumbers(inp1.value, myArr);
// }

// ? Task #6
// ? Cleaning Up Messy Arrays
// ! How to get array sign in HTML? What's wrong ? Check it !

// function cleanUpArray(arr) {
//     let mainArray = [];
//     let evenArray = [];
//     let oddArray = [];

//     mainArray = arr.map(elem => Number(elem));
//     evenArray = mainArray.filter(elem => elem % 2 === 0);
//     oddArray = mainArray.filter(elem => elem % 2 != 0);
//     return [evenArray, oddArray];
// }

// let btn = document.querySelector(".btn");

// btn.onclick = () => {
//     let inp1 = document.querySelector(".inp1");
//     let result = document.querySelector(".result");

//     let myArray = inp1.value.trim().split(" ");

//     result.innerHTML = cleanUpArray(myArray);
// }

// ? Task #7
// ? Age Difference Between Spouses

// function ageDifference(ages) {
//     ages.sort((a, b) => b - a);

//     if (ages[0] === ages[1])
//         return "No age difference between spouses.";
//     else if (ages[0] - ages[1] === 1)
//         return "1 year";
//     else
//         return `${ages[0] - ages[1]} years`
// }

// let btn = document.querySelector(".btn");

// btn.onclick = () => {
//     let inp1 = document.querySelector(".inp1");
//     let result = document.querySelector(".result");

//     let myArray = inp1.value.trim().split(" ");

//     result.innerHTML = ageDifference(myArray);
// }


// ? -------String-------

// ? Task #8
// ? City School Creating IDS
// ! Try to solve in another way !

// function createID(firstname, lastname) {
//     return firstname.charAt(0).toLowerCase() + lastname.charAt(0).toUpperCase() + lastname.charAt(1).toLowerCase() + lastname.charAt(2).toLowerCase();
// }

// let btn = document.querySelector(".btn");

// btn.onclick = () => {
//     let inp1 = document.querySelector(".inp1");
//     let inp2 = document.querySelector(".inp2");
//     let result = document.querySelector(".result");

//     result.innerHTML = createID(inp1.value, inp2.value);
// }


// ? Task #9
// ? Modifying the Last Character


// function modifyLast(str, n) {
//     let lastChar = str.charAt(str.length - 1);
//     return str.concat(lastChar.repeat(n - 1));
// }

// let btn = document.querySelector(".btn");

// btn.onclick = () => {
//     let inp1 = document.querySelector(".inp1");
//     let inp2 = document.querySelector(".inp2");
//     let result = document.querySelector(".result");

//     result.innerHTML = modifyLast(inp1.value, inp2.value);
// }


// ? Task #10
// ? Height of an Equilateral Triangle
// ! Try to get how round() and toFixed() methods worked in this task !!
// function height(side) {
//     let a = Math.sqrt(side * side - ((side / 2) * (side / 2)));
//     let b = (Math.round(a * 100) / 100).toFixed(2);
//     return `${b * 10} mm`
// }


// let btn = document.querySelector(".btn");

// btn.onclick = () => {
//     let inp1 = document.querySelector(".inp1");
//     let result = document.querySelector(".result");

//     result.innerHTML = height(inp1.value);
// }
