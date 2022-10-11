console.log("=======without argument=======");
function first_name(){
    console.log("harshvardhan jadhav");
    console.log("i have completed BE in mechanical engineering");

}
first_name()
console.log("============with argument or return===================");

function functionName(firstname,lastname){
    //console.log(firstname, lastname);
    return firstname + lastname

}
var value = functionName("harsh","jadhav")
console.log(value);

function swap_values(arg1,arg2) {
    console.log("============Before swap==================="); 
    console.log(arg1,arg2);
    console.log("============After swap===================");
var temp = arg1;
arg1 = arg2;
arg2 = temp;
console.log(arg1,arg2);

}
swap_values("Virat","Anushka");
swap_values("1000","2000");

function add_three_numbers(arg1,arg2,arg3) {
    console.log("=================Addition of three no===============");
    console.log(arg1 + arg2 + arg3);
    return arg1 + arg2 + arg3;
}
add_three_numbers(10.23,600,40)
add_three_numbers("Hello","Good","Morning");