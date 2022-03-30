// a function to count the number of vowels in a given string.
function countVowels(a){
    var vowels = ['a','e','i','o','u'];
    var count = 0;
    for(var i = 0; i < a.length; i++){
        if(vowels.indexOf(a[i]) !== -1){
            count++;
        }
    }
    return count;
}