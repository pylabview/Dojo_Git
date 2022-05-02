// mydiv = document.querySelector('.green')
// mydiv.innerText = "hello world!"

function removeMe(element){
    element.remove()
}
function bringBack(){
    // This will give a reference for the green div
    // id = remover
    toBrinngBack = document.querySelector('#remover')
    toBrinngBack.hidden = false

    if(!toBrinngBack.hidden){
    console.log('The green div is not hidden any more')

    console.log('Hey!!!')
    }
}

function bringBack_log(){
    // This will give a reference for the green div
    // id = remover
     console.log('Hey!!!')
    }


function addHeader(){
    var bluediv = document.querySelector('.blue')
    // As you type is adding the text to the blue div
    var inputText = document.querySelector('#myentry')
    bluediv.innerHTML += "<h1>" + inputText.value + "</h1>"

}

function addText(){
    var bluediv = document.querySelector('.blue')
    // As you type is adding the text to the blue div
    bluediv.innerText = element.value

}

function changeSrc(){
    var image = document.querySelector('img')
    image.src='notrealpic.png'
}

myh1 = document.querySelector("#remover h1")
myh1.innerText = "new selection"
// This is excute once when the js script is loaded
console.log('**************')

