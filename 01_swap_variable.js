var my_number = 100;
var your_number = 200;
console.log("before swap");
console.log(my_number,your_number);

var temp = my_number
my_number = your_number
your_number = temp
console.log("after swap");
console.log(temp,my_number,your_number);