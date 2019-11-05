const multiplyByFive = function(value, done){
    setTimeout(function(){
        done (value * 5);
    }, 1000)
}

const ourCallbackFunction = function(resultValue){
    console.log(`Your result is equal to: ${resultValue}`);
};

multiplyByFive(10, ourCallbackFunction);


multiplyByFive(10, function(firstResultValue){
    console.log(`Your first calculation result is equal to: ${firstResultValue}`);
    multiplyByFive(firstResultValue, function(secondResultValue){
        console.log(`Your second calculation result is equal to: ${secondResultValue}`);
    })
})