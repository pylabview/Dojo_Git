console.log("Page loading message.....");

function convert2F(C) {
    return C * 9/5 + 32
}

function convert2C(F) {
    return (F - 32) * 5/9;
}


function weatherDialog(){
    alert("Loading weather report....");
}

function iamok(){
    var cookieblock = document.querySelector("#cookiecontainer");
    cookieblock.remove();
}

function convertTemp(item){
    var tempValue = item.value;
    var allHigh = document.querySelectorAll(".high");
    var allLow = document.querySelectorAll(".low");
    if (tempValue=="°F"){
        for(var i =0; i < allHigh.length;i++){
            allHigh[i].innerText = Math.round(convert2F(allHigh[i].innerText));
        }
        for(var i =0; i < allHigh.length;i++){
            allLow[i].innerText = Math.round(convert2F(allLow[i].innerText));
        }
    }else if(tempValue=="°C"){
        for(var i =0; i < allHigh.length;i++){
            allHigh[i].innerText = Math.round(convert2C(allHigh[i].innerText));
        }
        for(var i =0; i < allHigh.length;i++){
            allLow[i].innerText = Math.round(convert2C(allLow[i].innerText));
        }
    }
}

