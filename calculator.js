document.addEventListener('DOMContentLoaded', () => {
    // your solution here
    // numberVariables

let store = document.getElementById("store")
let calculator = document.getElementById("calc")
let storeDisplay = []

calculator.addEventListener("click", function(event){
    event.preventDefault()

    let numCheck = event.target.parentElement.parentElement.hasAttribute("class")
    
    if (numCheck){
        storeDisplay.push(event.target.value)
        // console.log(event.target.value)
        renderStoreDisplay()
    } else if (event.target.value === "clear") {
        clearStoreDisplay()
    } else if (event.target.value === "=") {
        let result;
        result = storeDisplay.join("")
        console.log(result)
        store.innerHTML = `${eval(result)}`
    } else {
        //takes in array and runs math
        store.innerText = ""
        joinNumbers()
        storeDisplay.push(event.target.value)
        renderStoreDisplay()
    }
})

function renderStoreDisplay(){
    let mathString =  storeDisplay.join("")

    store.innerText = mathString
    console.log(storeDisplay)
}

function clearStoreDisplay(){
    store.innerText = ""
    storeDisplay = []
}

function joinNumbers(){
    
    let newNum;
    newNum = storeDisplay.join("")
    
    storeDisplay = [(newNum)]
}

});