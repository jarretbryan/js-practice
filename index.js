document.addEventListener('DOMContentLoaded', () => {
    // your solution here
    // grab DOM elements

    //variables
    const unorderedList = document.getElementById("lists");
    const theForm = document.getElementById("create-list-form")
    let stringArr = []
    let targetValue
    //event listeners

    unorderedList.addEventListener("click",function(event){
       
        // console.log(event.target)
        if (event.target.localname = "button"){
            stringArr = stringArr.filter(string => string !== event.target.id )
        }
        renderListItem()
        // if (event.target.dataset)
    })

    theForm.addEventListener("submit", function(event){
        event.preventDefault();
        targetValue = event.currentTarget["0"].value
        stringArr.push(targetValue)
        renderListItem();
        event.currentTarget["0"].value = ""
    })


    // function logic

    function renderListItem(){
        let list = stringArr.map(el => {
            return `<div><li>${el}</li><button id = "${el}">X</button></div>`
        }).join("")
        // console.log(stringArr)
        unorderedList.innerHTML = list
    }

 




    // const app = new TaskLister();
});