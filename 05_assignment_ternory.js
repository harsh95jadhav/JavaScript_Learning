function gret(arg1,arg2){
    var num1 = 10;
    var num2 = -10;
    num1>=num2;
    console.log("gretest value of 10 > -10 :",num1>num2);

    var num1 = 800;
    var num2 = 899;
    num1>=num2;
    console.log("gretest value of 800 > 899 :",num1>num2);


}
gret(10,-10)

console.log("=================even or odd=================");
var oddEven = function(arg1){
    console.log("29=====>",arg1%2,"false");

}
oddEven(29);

var oddEven = function(arg1){
    console.log("44=====>",arg1%2,"true");

}
oddEven(44);

var oddEven = function(arg1){
    console.log("00=====>",arg1%2,"true");

}
oddEven(0);

var oddEven = function(arg1){
    console.log("101=====>",arg1%2,"false");

}
oddEven(101);
console.log("==========================================");

var wordLengthSquare = function(arg1){
    var word1 = "javascript";
    console.log(arg1,"length of word :", word1.length,"EVEN");
}
  wordLengthSquare("JavaScript");

var wordLengthSquare = function(arg1){
    var word1 = "Developer";
    console.log(arg1,"length of word :", word1.length,"ODD");
}
  wordLengthSquare("Developer");

  var wordLengthSquare = function(arg1){
    var word1 = "Google";
    console.log(arg1,"length of word :", word1.length,"EVEN");
}
  wordLengthSquare("Google");
