

// ? Task #1
// ? Add the Index

function addIndexes(arr) {
    let myArr = [];
    myArr = arr.map((elem, index) => elem + index);
    return myArr;
}