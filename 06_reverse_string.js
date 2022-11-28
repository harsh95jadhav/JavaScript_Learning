 var myName = "mohit"
// 10 to 0
var lenthStr = myName.length - 1; // 
var reverseStr = "";
for (let index = lenthStr; index >= 0; index--) {
    console.log(myName.charAt(index));
    reverseStr = reverseStr + myName.charAt(index)
}
console.log(reverseStr);

console.log("*************************************************************");
var myName = "jadhav";
for (let index = myName.length-1; index >= 0; index--) {
    console.log(myName.charAt(index));
    
}
