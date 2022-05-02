mydiv = document.querySelector('.green')
mydiv.innerText = "hello world!"

function removeMe(){
    toRemove = document.querySelector('#remover')
    // toRemove.remove()
    // the id= remover is fully removed form our html
    toRemove.hidden = true
    // But with hidden == tru, is still part of our document
    if (toRemove.hidden){
        console.log("The green div is hidden now!")
    }
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


// This is excute once when the js script is loaded
console.log('**************')

