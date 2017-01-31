'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  var index=-1;
  for (var i = 0; i < values.length; i++) {
    if (target==values[i]) {
      index=i;
      break;
    }
  }
  return index;
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  var index=[];
  for (var i = 0; i < values.length; i++) {
    if (target==values[i]) {
       index.push(i);
    }
  }

  if (index.length!=0) {
    return index;
  }else{
    return -1;
  }

}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]
console.log(globalLinearSearch("z", banana_arr));
