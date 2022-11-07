const arrayOfName = ['Kamat','Memon','Nashpati','Taimur','Menon','Kamat','Andy','Taimur']
console.log(arrayOfName);
//console.log("*****************Total no of element*****************************************");
//var length = arrayOfName.length;
//console.log(length);
console.log("==============After Removing Duplicate Element==========");
const array = [...new Set(arrayOfName)];
console.log(array);

console.log("**************total no of removing duplcate***********************");
var length = arrayOfName.length;
var removedElement = array.length;
var duplicateCount = length - removedElement;
console.log(duplicateCount);
console.log("**************total no of element after removing duplcate***********************");
console.log(array.length);