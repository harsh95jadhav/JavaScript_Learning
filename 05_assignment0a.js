var maleMarriageEligibility = function( Gender, Age, boyName){
    var result = "Gender==male" && Age>=21   
    ? `Hey ${boyName} you are eligible for marriage`
    : `Hey ${boyName} you are not eligible for marriagr`
   return result

}
 var result = maleMarriageEligibility("male",25,"Billgates");
 console.log(result);
 console.log("========================================================");
 var result1 = maleMarriageEligibility("male",17,"Stew Jobs")
 console.log(result1);

 console.log("===============================================================");

 var maleMarriageEligibility = function( Gender, Age, girlName){
    var result = "Gender==female" && Age>=18   
    ? `Hey ${girlName} you are eligible for marriage`
    : `Hey ${girlName} you are not eligible for marriagr`
   return result

}
 var result = maleMarriageEligibility("female", 16 ,"Jenifer");
 console.log(result);
 console.log("========================================================");
 var result1 = maleMarriageEligibility("female",27,"Milinda Gates")
 console.log(result1);

    
 
