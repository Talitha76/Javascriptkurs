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
// Du kan utføre matematikk med variabler
const numberA=10
const numberB=32
const numberC = numberA + numberB +10
console.log(numberC)


//strenger kan og kombineres
const stringA = "Foo"
const stringB = "Bar"


// string templates

//boolean operasjoner

const numberD = 10
const numberE =15
const isGreater = numberD > numberE
console.log(isGreater)

const nameA = "Monica"
const nameB = "Eirik"
const isEqual = nameA === nameB
console.log(isEqual)

//Forgreininger

// if else

const personA = {
  name: "Kai",
  age: 17, 

}

console.log("if else block is finished")


// Løkker


let count =0
while (count <= 10) {
  console.log (count)
  count = count +1
}

const names = [
  "Lars", 
  "kai", 
  "Kristine",
  "julie",
  "janus"
]

console.log(names.length)
for (let index = 0; index < names.length; index++) {
  console.log(names[index])
}

//funksjoner og moduler

