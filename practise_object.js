
const person = {
    name: "harshvardhan",
    lastName: "jadhav",
    age: 28,
    greet: function() {
        console.log("hello");
    }


}
console.table(person);
person.greet();
//person.greet();
//Object.entries(person);
//when want result only value then use this loop
for (const key in person) {
    if (Object.hasOwnProperty.call(person, key)) {
        const element = person[key];
        console.log(element);
    }
}

//when use for string
const string = "code";
for(let i in string ){
console.log(string[i]);
}
//want any key without assign any key using for in loop
for (const key in person) {
    console.log(`${key} => ${person[key]}`);
        
    }

//"age" in person ;  ??? 
