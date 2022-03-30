// a function to find the number of even digits in a given integer.
function countEvenDigits(a){
    var count = 0;
    var num = a.toString();
    for(var i = 0; i < num.length; i++){
        if(num[i] % 2 === 0){
            count++;
        }
    }
    return count;
}
