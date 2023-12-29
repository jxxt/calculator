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

let lhs
let rhs

clearKey.addEventListener('click', () => {
    bottomDisplay.innerHTML = 0
})

deleteKey.addEventListener('click', () => {
    if (bottomDisplay.innerHTML != "0") {
        let lengthOfDisplay
        let str = bottomDisplay.innerHTML
        lengthOfDisplay = str.length
        // console.log(lengthOfDisplay)
        // console.log(str[lengthOfDisplay-1])
        bottomDisplay.innerHTML = ""
        for (let i = 0; i < lengthOfDisplay - 1; i++) {
            bottomDisplay.innerHTML += str[i]
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

// divideKey.addEventListener("click", () => {
//     let intergerValue = parseFloat(bottomDisplay.innerHTML)
//     // console.log(intergerValue)
//     lhs = intergerValue
//     topDisplay.innerHTML += lhs + " ÷ "
//     bottomDisplay.innerHTML = "0"
// }) 