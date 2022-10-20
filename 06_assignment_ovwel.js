console.log("=====find out owels of string :-'Good Morning iT champ' using 'includes'======");
var good = "Good Morning IT Champ";
var goodLowerCase = good.toLowerCase();
var owels = "aeiou";

for (let index = 0; index < good.length; index++) {
    var goodat = goodLowerCase.charAt(index);
    var char = owels.includes(goodat)
if ( char = owels.includes(goodat) ) {
    console.log(char,goodat);
   }
    
}
console.log("================vowels of string:-'I Love JavaScript'======================");

var givenSting = "I love Javascript"
var stringLower = givenSting.toLowerCase();
for (let index = 0; index < givenSting.length; index++) {
    var char = stringLower.charAt(index);
    if (char=="a" || char == "e" || char == "i" || char == "o" || char =="u") {
        console.log(char);
    }
    
}
console.log("============================addition of 1 to 10============================");
var add = 0;
for (let index = 1; index <=10; index++) {
    add = add + index;
    console.log(add);
    
}
console.log("===================addition of square 1 to 5 ============================");
var square = 1;
var add = 0;
for (let index = 1; index <=5; index++) {
    square = index * index;
    add = add + square;
    console.log(add);
    
}


console.log("============even char of string:-'Hard work always pay back================");
function evenPositionedChars(string){
//string.length;
//var stringchar = string.charAt(2);
//console.log(stringchar);
//console.log(lengthstring);
   for (let index = 0; index <string.length; index++) {
    var charAt = string.charAt(index);
      if (index%2==0 && charAt != " ") {
        
        console.log(charAt);
        
      }

   }
}
evenPositionedChars("Hard Work always pays back")
console.log("========even char of string:-'Soon i will be Angular iT champ'=============");
evenPositionedChars("Soon i will be Angular iT champ")

console.log("==============odd char of string:-'Hard work always pay back'=================");
function OddPositioneChars(string) {
    for (let index = 0; index < string.length; index++) {
        var stringb = string.charAt(index)
        if (index%2!=0 && stringb!=" ") {
            console.log(stringb);
            
        }
        
    }

    
}
OddPositioneChars("Hard Work always pays back")
console.log("==========odd char of string :-'Soon i will be Angular IT champ===============");
OddPositioneChars("Soon i will be Angular iT champ")



