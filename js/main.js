
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
// ! Function works but DOM not ? What's wrong ? Check it !

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