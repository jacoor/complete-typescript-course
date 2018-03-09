console.log("section 2.");

let message:string = "Hello world";

let counter:number = 1.2;

let messageRead:boolean = true;

console.log(message);

let person = {
    firstName: "Kobe",
    lastName: "Bryant",
}

let personWithTypes: {firstName:string, lastName:string} = {
    firstName: "Kobe",
    lastName: "Bryant",
}

//person.address = "alamaszkara"; //error, no address on type "person";
//notes"
// both "person" and personWithTypes have type defined, therefore adding new type is not possible.

let personWithAnyData: any ={
    firstName: "Kobe",
    lastName: "Bryant",
}

personWithAnyData.address = "some address data";  // this one works as personWithAnyData has type "Any";

// creating new types

type hasName = {firstName:string, lastName:string};

let personFromType: hasName = {
    firstName: "Kobe",
    lastName: "Bryant",
}

// note: property "address" is not here so it will generate error if you try to add it to personFromType;

//optional fields:

type hasNameOptional = {firstName?:string, lastname:string};

let personWithOptionalName = {
    lastname: "Doe",
}
console.log(personWithOptionalName);
