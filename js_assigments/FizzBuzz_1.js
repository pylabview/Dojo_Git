console.log("Hello")

for (var i = 1; i<100 ; i++){
    if (i%3 ==0 && i%5==0){
        console.log("FizzBuzz");
        continue;
    } else if (i%3==0){
        console.log("Fizz");
        continue;
    } else if (i%5==0){
        console.log("Fizz");
        continue;       
    }else {
        console.log(i);
        continue;
    }

}