console.log("page loading...");

setTimeout(gameIsOver,13000);

function remove(element){
    var sdiv = document.querySelector("#subdiv");
    console.log(sdiv)
    sdiv.remove();
}

function ninjaScored(element){
    element.innerText++;
}

function pirateScored(element) {
    element.innerText++;
}

function gameIsOver(){
    alert('The Ninjas have won!');
}