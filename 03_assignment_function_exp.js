var square = function(value){
    console.log("sqare value of", value );
    console.log(value * value);
}
square(5);
square(6);
square(25);
square(100);

console.log("===========Type of function============ ");
console.log(typeof square);

console.log("==========================================");

var areaOfTrangle = function(base, height, result){
     console.log("Area of trangle");
     result = 1/2 * base * height;
     return result;
}
var area = areaOfTrangle(45,34);
console.log(area);

console.log("======================================"); 

var rectangle = function(length,width){
    console.log("Area of rectangle");
    result = length * width;
    return result;
}
var area = rectangle(499,917);
console.log(area);

//console.log("======================================");

var swap_values = function(arg1,arg2){
    console.log("=================Before swap===============");
    console.log(arg1,arg2);
    console.log("=================After swap===============");
var temp = arg1;
arg1 = arg2;
arg2 = temp;
console.log(arg1,arg2);
}
swap_values("Virat","Anushka");
swap_values("1000","2000");

console.log("==============================================");
 var string = "JavaScript the most popular language"

 console.log(string);
 console.log("=============================================");
 console.log("Total character available in the string :",string.length);
 console.log("=============================================");
 console.log("index of character 's' : ",string.indexOf("s"));
 console.log("=============================================");
 console.log("index of string 'lang' :",string.indexOf("lang"));
 console.log("=============================================");
 console.log("last character of string :",string.charAt(string.length-1));
 console.log("=============================================");
 console.log("3rd last character of string :",string.charAt(string.length-3));
 