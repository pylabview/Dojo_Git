// Challange #1
// ------------------------------------
function alwaysHungry(arr){
    count = 0
    for(var i=0;i < arr.length;i++ ){
        
        if(arr[i] === "food"){
            count++
        }
    }
    console.log(count);
    if(count===0){
            console.log("I'm hungry");
        } else {
            yummy_str = '';
            for(var i =0; i < count;i++){
                yummy_str = yummy_str + "yummy,"
            }
            console.log(yummy_str.slice(0,yummy_str.length-1));
    }
    return count;

}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

// Challange #2
// ------------------------------------
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0; i < arr.length;i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// Challange #3
// ------------------------------------
function betterThanAverage(arr) {
    var sum = 0;
    var avg = 0;
    for(var i=0; i< arr.length; i++){
        sum=sum + arr[i];
    }
    avg = sum/arr.length
    var count = 0
    for(var i=0; i< arr.length;i++){
        if(arr[i] > avg){
            count++;
        }
    }
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// Challange #4
// ------------------------------------
function reverse(arr) {
    return arr.reverse();
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// Challange #5
// ------------------------------------
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(var i =0; i < n-2; i++){
        fibArr.push(fibArr[i]+fibArr[i+1]);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); 