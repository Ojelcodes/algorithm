function lentVowels(a){
    var a = ""
    var vowels = "a,e,i,o,u"
    var count
    for (let index = a; index < array.length; index++) {
        const element = array[index];
        if (element!==vowels) {
            continue
        }
    }
}

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
console.log(countVowels("rhym"));