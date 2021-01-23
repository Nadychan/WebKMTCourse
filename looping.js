let array = ["Apple", 2, true, "Pineaplle", "Watermalon", "Orange"];

// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);
    
// }

// array.map(item => {
//     console.log(item)
// })

let getString = array.filter(item => typeof(item) === 'string')
console.log(getString, 'Get All String')