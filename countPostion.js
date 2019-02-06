function countLetters(string){


    var charCounts = {};
       for(var i = 0; i < string.length; i++){
           var curChar = string[i];
           if (charCounts[curChar]) {
               charCounts[curChar].push(i);
           } else {
               charCounts[curChar] = [i];
           }
       }
       return charCounts;
   }
   console.log(countLetters('lighthouse in the house'))
   
   
   
