for (let index = 5; index <=15; index++) {
    console.log(index);
   // console.log("print 1 DONE");
    
}
console.log("================================");
for (let index = 50; index >=40; index = index-1) {
    console.log(index);
   // console.log("print 2 DONE");
}
console.log("===================================");
var countOdd=0;
for (let index = 0; index < 30; index++) {
    if (index%2==0) {
        console.log(index);
        countOdd = countOdd + 1;
        if (countOdd==15);{
            break;
            
        }

        
    }
    
}
console.log("=====================================");
var countEven = 0; // 2
for (let index = 0; index < 1000; index++) { // 1  2
    if(index%2==0){
        console.log(index); // 0  2 
        countEven = countEven +1;
        if (countEven==10) {
            break; 

        }
    }
}  
console.log("============================");
for (let index = 5; index <50; index=index+5) {
    console.log(index);
    
}
console.log("===========================");
for (let index = 10; index < 100; index=index+10) {
    console.log(index);
    
}
console.log("==================================");
for (let index = 100; index >=10; index=index -10) {
    console.log(index);
    
}