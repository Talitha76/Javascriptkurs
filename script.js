console.log('Hello world!');

//Data typer som vi kan lagre i variabler

// Primitivene
let myBoolean = false
let myNumber = 32324
let myString = "hello world"

let myUndefined = undefined
let myNull = null

console.log(myBoolean)
console.log(myNumber)
console.log(myString)

// Kompositter/Referantial types
const myListOfNumbers =[1, 2, 3, 4]
console.log(myListOfNumbers)
//hente ut enkeltelementer
console.log(myListOfNumbers[0])

const myListOfNames = [ "Monica", "kristine", "ole"]
console.log(myListOfNames[2])

const myMixedList = [1, "foo", false]
const myMultidimentionalArray = [
  [1, 1, 2, 3],
  [2, 3, 4, 5],
  [1, 2, 3, 4],
  [1, 3, 4, 5],
]

//Objekter
const monica = {
  name: "Monica Johansen",
  age: 48,
  gender: "female",
}

console.log(monica)
console.log(monica.gender)

let ikkeEksisterendesVariable
console.log(ikkeEksisterendesVariable)

const todo ={
  title: "Vask huset", 
  isComplete: false,


}