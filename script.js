const display = document.querySelector(".display")
const topDisplay = document.querySelector(".top")
const bottomDisplay = document.querySelector(".bottom")

const clearKey = document.querySelector(".clear")
const deleteKey = document.querySelector(".delete")

const oneKey = document.querySelector(".one")
const twoKey = document.querySelector(".two")
const threeKey = document.querySelector(".three")
const fourKey = document.querySelector(".four")
const fiveKey = document.querySelector(".five")
const sixKey = document.querySelector(".six")
const sevenKey = document.querySelector(".seven")
const eightKey = document.querySelector(".eight")
const nineKey = document.querySelector(".nine")
const zeroKey = document.querySelector(".zero")

const dotKey = document.querySelector(".dot")

const divideKey = document.querySelector(".divide")
const multiplyKey = document.querySelector(".multiply")
const subtractKey = document.querySelector(".subtract")
const addKey = document.querySelector(".add")

const equalKey = document.querySelector(".equal")

let signCounter = 0

let lhs
let rhs

let solution

let divideCounter
let multiplyCounter
let subtractCounter
let addCounter

clearKey.addEventListener('click', () => {
    bottomDisplay.innerHTML = 0
    topDisplay.innerHTML = ""
    signCounter = 0
    lhs = 0
    rhs = 0
})

deleteKey.addEventListener('click', () => {
    if (bottomDisplay.innerHTML != "0") {
        let lengthOfDisplay
        let str = bottomDisplay.innerHTML
        lengthOfDisplay = str.length
        // console.log(lengthOfDisplay)
        // console.log(str[lengthOfDisplay-1])
        bottomDisplay.innerHTML = ""
        let i
        for (i = 0; i < lengthOfDisplay - 1; i++) {
            bottomDisplay.innerHTML += str[i]
        }
        if (i == 0) {
            bottomDisplay.innerHTML = 0
        }
    }
})

oneKey.addEventListener('click', () => {
    if (bottomDisplay.innerHTML == "0") {
        bottomDisplay.innerHTML = ""
        bottomDisplay.innerHTML += "1"
    }
    else {
        bottomDisplay.innerHTML += "1"
    }
})

twoKey.addEventListener('click', () => {
    if (bottomDisplay.innerHTML == "0") {
        bottomDisplay.innerHTML = ""
        bottomDisplay.innerHTML += "2"
    }
    else {
        bottomDisplay.innerHTML += "2"
    }
})

threeKey.addEventListener('click', () => {
    if (bottomDisplay.innerHTML == "0") {
        bottomDisplay.innerHTML = ""
        bottomDisplay.innerHTML += "3"
    }
    else {
        bottomDisplay.innerHTML += "3"
    }
})

fourKey.addEventListener('click', () => {
    if (bottomDisplay.innerHTML == "0") {
        bottomDisplay.innerHTML = ""
        bottomDisplay.innerHTML += "4"
    }
    else {
        bottomDisplay.innerHTML += "4"
    }
})

fiveKey.addEventListener('click', () => {
    if (bottomDisplay.innerHTML == "0") {
        bottomDisplay.innerHTML = ""
        bottomDisplay.innerHTML += "5"
    }
    else {
        bottomDisplay.innerHTML += "5"
    }
})

sixKey.addEventListener('click', () => {
    if (bottomDisplay.innerHTML == "0") {
        bottomDisplay.innerHTML = ""
        bottomDisplay.innerHTML += "6"
    }
    else {
        bottomDisplay.innerHTML += "6"
    }
})

sevenKey.addEventListener('click', () => {
    if (bottomDisplay.innerHTML == "0") {
        bottomDisplay.innerHTML = ""
        bottomDisplay.innerHTML += "7"
    }
    else {
        bottomDisplay.innerHTML += "7"
    }
})

eightKey.addEventListener('click', () => {
    if (bottomDisplay.innerHTML == "0") {
        bottomDisplay.innerHTML = ""
        bottomDisplay.innerHTML += "8"
    }
    else {
        bottomDisplay.innerHTML += "8"
    }
})

nineKey.addEventListener('click', () => {
    if (bottomDisplay.innerHTML == "0") {
        bottomDisplay.innerHTML = ""
        bottomDisplay.innerHTML += "9"
    }
    else {
        bottomDisplay.innerHTML += "9"
    }
})

zeroKey.addEventListener('click', () => {
    if (bottomDisplay.innerHTML == "0") {
        bottomDisplay.innerHTML = ""
        bottomDisplay.innerHTML += "0"
    }
    else {
        bottomDisplay.innerHTML += "0"
    }
})

dotKey.addEventListener('click', () => {
    let counter = 0
    let lengthOfDisplay
    let str = bottomDisplay.innerHTML
    lengthOfDisplay = str.length
    for (let i = 0; i < lengthOfDisplay; i++) {
        if (str[i] == ".") {
            counter++
        }
    }
    if (counter == 0) {
        bottomDisplay.innerHTML += "."
    }
    else {
        bottomDisplay.innerHTML += ""
    }
})

divideKey.addEventListener("click", () => {
    signCounter++
    divideCounter = 1
    multiplyCounter = 0
    subtractCounter = 0
    addCounter = 0
    if (signCounter == 1) {
        let intergerValue = parseFloat(bottomDisplay.innerHTML)
        console.log(intergerValue)
        lhs = intergerValue
        topDisplay.innerHTML += bottomDisplay.innerHTML + " ÷ "
        bottomDisplay.innerHTML = "0"
    }
    else {
        topDisplay.innerHTML = solution + " ÷ "
        lhs = solution
        bottomDisplay.innerHTML = "0"
    }
})

multiplyKey.addEventListener("click", () => {
    signCounter++
    divideCounter = 0
    multiplyCounter = 1
    subtractCounter = 0
    addCounter = 0
    if (signCounter == 1) {
        let intergerValue = parseFloat(bottomDisplay.innerHTML)
        console.log(intergerValue)
        lhs = intergerValue
        topDisplay.innerHTML += bottomDisplay.innerHTML + " x "
        bottomDisplay.innerHTML = "0"
    }
    else {
        topDisplay.innerHTML = solution + " x "
        lhs = solution
        bottomDisplay.innerHTML = "0"
    }
})

subtractKey.addEventListener("click", () => {
    signCounter++
    divideCounter = 0
    multiplyCounter = 0
    subtractCounter = 1
    addCounter = 0
    if (signCounter == 1) {
        let intergerValue = parseFloat(bottomDisplay.innerHTML)
        console.log(intergerValue)
        lhs = intergerValue
        topDisplay.innerHTML += bottomDisplay.innerHTML + " - "
        bottomDisplay.innerHTML = "0"
    }
    else {
        topDisplay.innerHTML = solution + " - "
        lhs = solution
        bottomDisplay.innerHTML = "0"
    }
})

addKey.addEventListener("click", () => {
    signCounter++
    divideCounter = 0
    multiplyCounter = 0
    subtractCounter = 0
    addCounter = 1
    if (signCounter == 1) {
        let intergerValue = parseFloat(bottomDisplay.innerHTML)
        console.log(intergerValue)
        lhs = intergerValue
        topDisplay.innerHTML += bottomDisplay.innerHTML + " - "
        bottomDisplay.innerHTML = "0"
    }
    else {
        topDisplay.innerHTML = solution + " + "
        lhs = solution
        bottomDisplay.innerHTML = "0"
    }
})

equalKey.addEventListener("click", () => {
    intergerValue = parseFloat(bottomDisplay.innerHTML)
    console.log(intergerValue)
    rhs = intergerValue
    console.log(divideCounter)
    if (divideCounter) {
        solution = lhs / rhs
    }
    else if (multiplyCounter) {
        solution = lhs * rhs
    }
    else if (subtractCounter) {
        solution = lhs - rhs
    }
    else if (addCounter) {
        solution = lhs + rhs
    }
    topDisplay.innerHTML += bottomDisplay.innerHTML
    bottomDisplay.innerHTML = solution
})