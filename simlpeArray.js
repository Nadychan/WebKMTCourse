let arr = ['Apple', 2, true, "orange", "Pineapple", "Tomato", 'Blueberry'];

arr.push('Jinger')//insert last of value
arr.unshift('watermalon')//insert of front of value
arr.shift()//remove front of value
arr.pop()//remove last of value
arr.splice(index, qty)//cut value but overwrite the original array
let arr2 = arr.slice(startIndex, endIndex)//cut value look like setsup but NOT overwrite the original array
arr[1] = 'Strawberry'//update the first value of original array

console.log(arr2)

console.log(arr.indexOf(true),'Index of Orange')

console.log(arr.toString())//output is string with ','

