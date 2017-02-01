'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
    //write your code here
    var ketemu = false;
    var i = 0
    while (!ketemu) {
        if (target == values[i]) {
            return i
            ketemu = true;
        } else {
            i++
            if (i > values.length) {
                return -1
            }
        }
    }
}

let random_numbers = [6, 29, 18, 2, 72, 19, 18, 10, 37];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
const globalLinearSearch = (target, values) => {
    //write your code here
    var global = [];
    for (var i = 0; i < values.length; i++) {
        if (target === values[i]) {
          global.push(i);
        }
    }
    return global;
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
// console.log(banana_arr)
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]
