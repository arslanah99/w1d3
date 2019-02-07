function countLetters(string){
    string = string.replace(/\s/g, '');
 var charCounts = {};
    for(var i = 0; i < string.length; i++){
        var curChar = string[i];
        if (charCounts[curChar]) {
            charCounts[curChar] += 1;
        } else {
            charCounts[curChar] = 1;
        }
    }
    return charCounts;
}

console.log(JSON.stringify(countLetters('lighthouse in the house'), null, 2))