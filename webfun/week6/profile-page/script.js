console.log("page loaded...");
var reqs = document.querySelector("#reqs");
var connections = document.querySelector("#conns")
var numOfConnections = parseInt(connections.innerText);
var user = document.querySelector("#username")

function accept(id){
    var elem = document.querySelector(id);
    elem.remove()
    reqs.innerText--;
    numOfConnections++;
    connections.innerText = numOfConnections;
}

function reject(id){
    var elem = document.querySelector(id);
    elem.remove()
    reqs.innerText--;
}

function editUserName(){
    user.innerText = "Rose M.";
}