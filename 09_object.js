let variable_name = "";
let objectPerson = {
    fullName: "sachin tendulkar",
    city: "mumbai",
    age: 42,
    isMarried: true,
    address: {
        street: "AS CLUB",
        pin_code: 12345,
        city: "pune",
        state: "MH"
    },
    eat:function() {
        console.log("i am vegitarian");
    },
    details: function() {
        let personDetail = `details are : ${this.fullName}, ${this.age}, ${this.address.city}`;
        return personDetail;
        console.log(this.fullName);
    }
 

}

let pDetails = objectPerson.details();
console.log(pDetails);
console.log("================");

console.log(objectPerson.address);
console.log(objectPerson.address.street);
objectPerson.address.landmark = "near main road";

objectPerson.eat(); //when use the function

console.log(typeof objectPerson); //when find out typeOf the object

objectPerson.fullName = "sachin ramesh tendulkar"//how to add or update the value
objectPerson.pincode = 12345;//add property on block
objectPerson.profession = "cricketer";//add property on block

console.log(objectPerson.city);//how to result only one property from block

delete objectPerson.age; //when want to delete some property 

console.log(objectPerson["age"]);//how to result only one prperty from block

console.log(objectPerson);
let sachinFullName = objectPerson.fullName;
console.log(sachinFullName);

let collegeAbc = {

}
console.log(collegeAbc);











