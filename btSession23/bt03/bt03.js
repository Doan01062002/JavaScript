for(let i=1; i<=100; i++){
    if(i%3 == 0){
        if(i%5 == 0){
            console.log("FizzBuzz", i);
        }else{
            console.log("Fizz", i);
        }
    }else if(i%5 == 0){
        if(i%3 == 0){
            console.log("FizzBuzz", i);
        }else{
            console.log("Buzz", i);
        }
    }
}