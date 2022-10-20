let Teacher = {
    Name: "Pravin Nemade",
    city: "indapur",
    dist: "pune",
    Degrees:{
        degree1: "CSC",
        degree2: "PHD",
        degree3: "Adv computing",
        degree4: "Btech",
        Certificates:{
            Certificate1: "Hacker rank Participation",
            certificate2: "Certificate in Adv Prorgramming",
            certificate3: "Certificate in IFE course"
        }
        
    },
    details: function() {
        let degreeDetails = `Total Degrees Are : ${this.Degrees.degree1}, ${this.Degrees.degree2}, ${this.Degrees.degree3}, ${this.Degrees.degree4}`
        return degreeDetails;
    }


}
console.log(Teacher);
console.log(Teacher.Degrees);
console.log(Teacher.Degrees.Certificates);
let Tdetails = Teacher.details();
console.log(Tdetails);
console.log("================New property added is================");
Teacher.pincode = "413306";
console.log("pincode:-", Teacher.pincode);
//console.log(Teacher);
console.log("===================modifyed property is name=========");
Teacher.Name = "Pravin Santosh Nemade"
console.log(Teacher);
console.log("===========After deleting ceriticate3================");

delete Teacher.Degrees.Certificates.certificate3;
console.log(Teacher.Degrees.Certificates);
console.log("=================added new certifcate================");
console.log("added certificate3:-Artificial intelegency");
Teacher.Degrees.Certificates.certificate3 = "Artificial intelegency";
console.log(Teacher.Degrees.Certificates);
