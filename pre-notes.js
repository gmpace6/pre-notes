// let age = 21

// function logDetails() {
//   let name = 'Tyler'
//   console.log(`My name is ${name} and I am ${age}.`)
// }
// // console.log(logDetails())

// const dog = {
//     'name': 'Freida',
//     'color': 'brown/black',
//     'hunger': 40,
//     'mood': 'feisty',
//     'age': 9,
//   };
// //   console.log(dog)

//   function giveMeFive() {
//     return 5
// }
// // console.log(giveMeFive())


// const sayHi = function() {
//     return 'Hi!'
// }
// // console.log(sayHi())


// const sayBye = () => {
//     return 'Bye!'
// }
// // console.log(sayBye())


// const returnParam = item => {
//     return item
// }
// // console.log(returnParam())


// const makeArr = (one, two, three) => {
//     let arr = [one, two, three]
//     return arr
// }
// // console.log(makeArr())


// const giveMeFive1 = () => 5
// // console.log(giveMeFive1())


// const addFive = num => num + 5
// // console.log(addFive())


// const makePriceObj = number => ({price: number})
// // console.log(makePriceObj)


// const makeLargeObj = (str, num, arr) => (
//     {
//         word: "str",
//         integer: "num",
//         list: "arr",
//     }
// )
// // console.log(makeLargeObj)


// const createAdder = x => (y) => x + y

// // here's the same function written as a declaration
// // function createAdder(x) {
// //    return function(y) {
// //        return x + y
// //    }
// //}

// const addFive1 = createAdder(5)
// const addTen = createAdder(10)

// addFive1(12) // output: 17
// addFive(40) // output: 45
// addTen(3) // output: 13

// console.log(createAdder())

const addFive = (num) => num + 5
console.log(addFive(1))