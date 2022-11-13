var array = [2,3,4,5,9];

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
for (let index = (array.length-1); index>=0; index--) {
    var element = array[index];
    console.log(element);
    
}

console.log(typeof array);
