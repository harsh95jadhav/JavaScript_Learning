var num1 = -5;
var result = num1 > 0 ? "Positive" : "Negative";
console.log(result);

myNumber = 11;
var resut = myNumber % 2 == 0 ? "EVEN" : "ODD"
console.log(resut);


var tcsEligibilityCheck = function (grad_score, hsc_score, ssc_score, candidate_name) {
    console.log(grad_score >= 70);
    var result = grad_score >= 70 || hsc_score >= 80 || ssc_score > 90  // false || true
        ? `Congrates ${candidate_name} you are eligible for TCS interview`
        : "Unfortunately you are not eligible for interview";
    console.log(result);
}
tcsEligibilityCheck(80, 86, 90, "Mohit Sharma");
tcsEligibilityCheck(69, 65, 95, "Anil Pende");

/* var wordLenghtSquare = function(givenWord){
    var wordLength = givenWord.length;
    var sqr = wordLength * wordLength;
    return sqr;
 
 }
 var result = wordLenghtSquare("JavaScript");
 log(result);
 
 var givenString = "I am Angular Developer";
 var strLength = givenString.length;
 var arryayWords = givenString.split(" ");
 var count  = arryayWords.length;
 var res = strLength / count;
 log(res)
 