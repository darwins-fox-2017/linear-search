'use strict'

// Release 0
console.log("Linear Search")
const linearSearch = (target, values) => {
  //write your code here
  let flag = false
  let i = 0
  while(!flag){
    if(target == values[i]){
      return values.indexOf(values[i])
      flag = true
    }else{
      i++
      if(i>values.length){
        return -1
      }
    }
  }
}



let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
const globalLinearSearch = (target, values) => {
  //write your code here
  let i = 0
  let result = []
  while(i<values.length){
    if(target === values[i]){
      result.push(i)
    }
    i++
  }
return result
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]
