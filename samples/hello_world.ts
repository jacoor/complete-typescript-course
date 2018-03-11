let text = "Ala";

import {buildPersonData2} from "./buildPersonData";

const sayHello = (message:string) => {
    console.log(message);
}

// very short version
const sayHelloShort = (message:string) => {console.log(message);};

sayHello(text);

sayHelloShort(text);

//another arrow function thing

class Person{
    name: string;
    constructor(name:string) {
        this.name = name;
    };

    sayHi = function(this: any){  // very weird declaration of this here.. But also similar to Python
        console.log("not timeoput ", this.name);
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name}`);
        }, 1000);
    };

    sayHiArrow = () => {  // compared with the above doesn't complain about "this" being any
        console.log("not timeoput ", this.name);
        setTimeout(() => {
            console.log(`Hello Arrow,




              my name is ${this.name}`);
        }, 1000);
    };

    // main takeaway:
    // creating function with => does not create new scope for variables, so sayHiArrow uses Person scope
    // therefore this is already defined. For regular sayHi this has to be passed nicely as parameter.

}

const person = new Person("Blob");

person.sayHi();
person.sayHiArrow()

// object destructuring

function buildPersonData({firstName, lastName}:any, address = [""]){
  return firstName + " " + lastName +" "+ address; 
}

const personData = {
  firstName: "Kobe",
  lastName: "Bryant",
  address: "Staples Center"
};

buildPersonData(personData);

const firstName= "Kobe",
  lastName= "Bryant";

const partialAddress = ["Street Name", "Street number", "Po box"];

const personData2 = {
  firstName,
  lastName
};


const fullAddress = partialAddress.concat(["Staples Center"]);

buildPersonData(personData2, fullAddress);

const fullAddress2 = [...partialAddress, "Staples Center", "buildPersonData2"];

buildPersonData(personData2, fullAddress2);

console.log(buildPersonData2(personData2, fullAddress2));