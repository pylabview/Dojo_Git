console.log("loading page....!")

var likesInitCount = 3;
var likesSpan1 = document.querySelector("#span-1")

function like(){
    likesInitCount++;
    likesSpan1.innerText= likesInitCount + " like(s)"

}