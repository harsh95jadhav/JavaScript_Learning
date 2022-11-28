var array = [2, 3, 4, 5, 9];

array.push(20);//add the element from end
console.log(array);
array.pop();//remove the element from end
console.log(array);
var arrayIn = array.indexOf(2);//gives the position of number
console.log(arrayIn);
var arrayInc = array.includes(2);//find out given value is in the array or not and give result in true false statment
console.log(arrayInc);
array[2] = 5;//when assigning new value insted if that value and use table for log
//console.table(array);
//how to travers in reverse the given array
for (let index = (array.length - 1); index >= 0; index--) {
    var element = array[index];
    console.log(element);

}

//console.log(typeof array);


//var myName = "harsh"
//var myNumber =new Number(myName);
//console.log(myNumber);
var myNumber = 0 / 0;
//console.log(myNumber);

var myName = "hello";
var myNumber = new Number(myName);
//console.log(myNumber);

var Name = "hello";
var number = new Number(Name);
//console.log(number);

var array  = [1,2,3,5,8,4,6,1,25];
 array.sort((a,b) =>a-b)
  console.log(array.sort((a,b) =>a-b));
  for (const key in array) {
    if (Object.hasOwnProperty.call(array, key)) {
        const element = array[key];
       // console.log(element);
        
    }
  }
for (let index = 0; index >= (array.length-1); index--) {
    const element = array[index];
    //console.log(element);
    
  
}

var arr = [5,8,6,7,6,9];
var sum = 0;
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  var sum1 = sum += arr[index];
  //console.log(sum1);
}

arr.forEach((element)=>{
  //console.log(element * element);
  console.log(element + element);
})
  for (const i in arr) {
    console.log(i);
      
    }
  
    for (const i of arr) {
      console.log(i);
        
      } 

