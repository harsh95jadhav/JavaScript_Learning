var givenString = "I love JavaScript";
var totalChar = givenString.length;
for (let index = 0; index <totalChar; index++) {
    if (index%2==0) {
        var charAt = givenString.charAt(index);
        console.log(charAt); 
    }  
}
// WAP to just log the vowels from the given string ; a e i o u, A E  I O U 
var givenString = "a I love JavaScript";
console.log("================= Just log Vowels ======================");
for (let index = 0; index < givenString.length; index++) {
    var char = givenString.charAt(index); // a
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u"
        || char == "A" || char == "E" || char == "I" || char == "O" || char == "U") {
        console.log(char);
    }
}

// WAP to just log the vowels from the given string ; a e i o u, A E  I O U 
var givenString = "a I love JavaScript";
console.log("================= Just log Vowels ======================");
 var strLowerCase = givenString.toLowerCase();// "a i love javascript"
 for (let index = 0; index < givenString.length; index++) {
    var char = strLowerCase.charAt(index);
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
        console.log(char);
    }
}

console.log("=====================even==================");
var string = "Hard Work always pays back";
string.length;
//var stringchar = string.charAt(2);
//console.log(stringchar);
//console.log(lengthstring);
for (let index = 0; index <string.length; index++) {
    var charAt = string.charAt(index);
    if (index%2==0 && charAt != " ") {
        
        console.log(charAt);
        
    }
    
}
//Count the total number vowels using includes() for string → “Good Morning IT Champ”
var countVowels = function(myString) {
    console.log("Count the total number vowels using includes() for string → “Good Morning IT Champ”");
    //var myString = "Good Morning IT Champ";
    var vowelsLoweCase = "aeiou";
    var vowelUpperCase = "AEIOU";
    var vowelsCount=0;
    for (let index = 0; index < myString.length; index++) {
       var char =  myString.charAt(index);
       var isLowerAvailable =  vowelsLoweCase.includes(char);
       var isUpperAvailable =  vowelUpperCase.includes(c
console.log("============================");
function evenPositionedChars(myString){
    for (let index = 0; index < myString.length; index++) {
       // console.log(index%2==0);
       var chh = myString.charAt(index);
       if (index%2==0 && chh!=" ") {
          console.log(chh);
       }
       //var chh = myString.charAt(index);
        
    }
}
evenPositionedChars("Hard work always pays back");



