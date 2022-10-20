function strip(score) {
    if (score<35 && score>0) {
        console.log("you are Failed");
    } else if (score>=35 && score<60) {
        console.log("you are pass with grade 'c'");
    } else {if (score>=60 && score<75) {
        console.log("pass with grade 'B'");
    }else if (score>=75 && score<90) {
        console.log("yu are pass with grade 'A'");
    }else if (score>=90 && score<100) {
        console.log("you are pass with grade 'A+'");
    }else if (score>="-20") {
        console.log("invalid score");
    }else if (score>=null && score>="fifty five") {
        console.log("invalid input");
    }else if (score>="undefined") {
        console.log("invalid input");
    }else if (score>="") {
        console.log("invalid score");
    }
        
    }
}
console.log(`score is 66:`);
var result = strip(66)

console.log("======================================");
console.log("your score is 13:");
var result = strip(13)
console.log("======================================");
console.log("your score is '':");
var result = strip("")
console.log("======================================");
console.log("your score is 98:");
var result = strip(98)
console.log("======================================");
console.log("your score is fifty five:");
var result = strip("fifty five")
//console.log(`your score is fifty five : ${result}`);
console.log("======================================");
console.log("your score is 35:");
var result = strip(35)
console.log("======================================");
console.log("your score is 75:");
var result = strip(75)
console.log("======================================");
console.log("your score is null:");
var result = strip(null)
console.log("======================================");
console.log("your score is undefined:");
var result = strip("undefined")
console.log("======================================");
console.log("your score is -20:");
var result = strip("-20")
console.log("======================================");
console.log("your score is 55:");
var result = strip(55)
console.log("======================================");
console.log("your score is 82:");
var result = strip(82)