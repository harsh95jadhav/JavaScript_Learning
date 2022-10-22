class Vehicle {
    constructor(vehicleName, number, color, speed){
        this.vehicleName = vehicleName;
        this.number = number;
        this.color = color;
        this.speed = speed;
    }
    
}
let vehicle1 = new Vehicle("Bike", "MH-1098", "Black", "60KMPh");
console.log(vehicle1);
let vehicle2 = new Vehicle("car", "MH-4026", "Black", "155kmph");
console.log(vehicle2);
let vehicle3 = new Vehicle("Bus", "MH-1234", "Red", "72kmph");
console.log(vehicle3);
let vehicle4 = new Vehicle("Auto", "MH-5678", "Black", "60kmph");
console.log(vehicle4);
let vehicle5 = new Vehicle("Tempo", "MH-0910", "White", "120bpm");
console.log(vehicle5);

console.log("********************************************************************************");

class College {
    constructor(collegeName, city, established){
        this.collegeName = collegeName;
        this.city = city;
        this.established = established;
    }
}
let college1 = new College("SBPCOE", "Pune", 2009);
console.log(college1);
let college2 = new College("Shivaji Poly", "Sangli", 2009);
console.log(college2);
let college3 = new College("JSPM", "Pune", 2008);
console.log(college3);
let college4 = new College("SVERI", "Sangola", 1998);
console.log(college4);
console.log("*************************************************************************");

function travers_object(collegeName, city, established) {
    this.collegeName = collegeName;
    this.city = city;
    this.established = established;
  
}

 let Person = new travers_object("SBPCOE", "PUNE", "2009")
 console.log(Person);
 for (const key in Person) {
        const element = Person[key];
        console.log(element);
    }
 let person1 = new travers_object("Shivaji Poly", "Sangli", 2009)
 console.log(person1);
 for (const key in person1) {
    const element = person1[key];
    console.log(element);
}
 let Person2 = new travers_object("JSPM", "Pune", 2008)
 console.log(Person2);
 for (const key in Person2) {
    const element = Person2[key];
    console.log(element);
}
 let Person3 = new travers_object("SVERI", "Sangola", 1998)
 console.log(Person3);
for (const key in Person3) {
        const element = Person3[key];
        console.log(element);
    }

//console.log(Vehicle instanceof vehicle1);

 //console.log("**************************************************************");





