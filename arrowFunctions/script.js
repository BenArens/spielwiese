

// function double(num) {
//     return num * 2;
// }

// function combineStrings(str1, str2) {
//     return str1 + " " + str2;
// }

// function isEven(number) {
//     if (number % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

let isEven = (number) => {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let double = (num) => num * 2;
let combineStrings = (str1, str2) => str1 + " " + str2;

function init() {
    console.log(double(3));
    console.log(combineStrings("Hallo", "Welt!"));
    console.log(isEven(33));
}

