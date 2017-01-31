'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  var countMatch = 0;
  //write your code here
  for (var i = 0; i < values.length; i++) {
    if (values[i] == target) {
      countMatch += 1
    }
  }
  return countMatch > 0 ? countMatch : -1
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  //write your code here
  var res = []
  for (var i = 0; i < values.length; i++) {
    if (values[i] == target) {
      res.push(i)
    }
  }
  return res.length > 0 ? res : -1
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]
