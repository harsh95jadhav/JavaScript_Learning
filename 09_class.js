class Person{
    constructor(fullName, city, age, gender){
      this.fullName =   fullName;
      this.city = city;
      this.age = age;
      this.gender = gender;
    }
    
}


let sachin = new Person("Sachin Tendulkar", "Pune", 45, "Male");
let rohit = new Person("Rohit Shram", "Mumbai", 32, "Male");
console.log(sachin);
console.log(rohit);
console.log("*****************************************");
//details(){
//    console.log(`Person Details: ${this.fullName}  ${this.city}  ${this.age}  ${this.gender}`);
//}
//sachin.details();


console.log(rohit instanceof Student);
console.log(sachin instanceof Student);
