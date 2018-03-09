console.log("section 2.");

let message:string = "Hello world";

let counter:number = 1.2;

let messageRead:boolean = true;

console.log(message);

let person = {
    firstName: "Kobe",
    lastName: "Bryant",
};

let personWithTypes: {firstName:string, lastName:string} = {
    firstName: "Kobe",
    lastName: "Bryant",
};

//person.address = "alamaszkara"; //error, no address on type "person";
//notes"
// both "person" and personWithTypes have type defined, therefore adding new type is not possible.

let personWithAnyData: any ={
    firstName: "Kobe",
    lastName: "Bryant",
};

personWithAnyData.address = "some address data";  // this one works as personWithAnyData has type "Any";

// creating new types

type hasName = {firstName:string, lastName:string};

let personFromType: hasName = {
    firstName: "Kobe",
    lastName: "Bryant",
};

// note: property "address" is not here so it will generate error if you try to add it to personFromType;

//optional fields:

type hasNameOptional = {firstName?:string, lastName:string};

// type can also be defined as "interface"

interface hasNameOptionalInterface {
    firstName?:string,
    lastName: string,
};

let personWithOptionalName: hasNameOptional = {
    lastName: "Doe",
};

let personWithOptionalName2: hasNameOptionalInterface = {
    lastName: "Doe",
};

console.log(personWithOptionalName);
console.log(personWithOptionalName2);

// combining types together

type hasAddress = {
    street: string,
}

type PersonWithAddress = {
    name: hasNameOptional,
    address?: hasAddress,
}

let personWithAddress:PersonWithAddress = {
    name: {
        lastName: "Smith",
    },
}

console.log(personWithAddress);

// in typescript and in js functions are valid variables

function createHelloMessage(name){
    return `Hello, my name  is ${name}`;
}

let hello = createHelloMessage;
console.log(hello("Jacek"));

console.log(hello({firstName:"Jacek"})); // thats bad.


function safeCreateHelloMessage(name:string, extra?: number) :string{  //last "string" defines output type
    // this function will not accept object as name
    return `Hello, my name  is ${name}`;
}

// console.log(safeCreateHelloMessage({firstName:"Jacek"})); // fails, due to wrong type.
// actually fails means that the program will compile and run (sic!) however compiler will error out.

const message1 = safeCreateHelloMessage("Bill");
console.log(message1);

type MessageCreator = (message:string) => string;  //function type. Accepts string and outputs string;

const creator: MessageCreator = safeCreateHelloMessage;

const message3 = creator("Bill");

console.log(message3);

// there is also an option to create type as interface with one method (mentioned also before);
interface MessageCreatorInterface{
    (name:string) :string
}

// using the interface

const creatorFromInterface: MessageCreatorInterface = safeCreateHelloMessage;

const message4 = creator("Bill 4");

console.log(message4);

// arrays strong typing and tuples

let persons:string[] = ["Kobe", "John", "Shaq"];
let counters:number[] = [1, 2, 3];
//won't work 
//counters = persons;

let tuple = ["string", 1];

type PlayerTuple = [string, number];

let tuple1: PlayerTuple = ["name", 1];

type ThreeNames = [string, string, string];

let tuple3: ThreeNames =["ala", "ma", "kota"];
    
// enums

// 0 - Guard, 1 - Forward, 2 - Center

// using player from previous example



enum PlayerPosition {
    Guard,
    Forward,
    Center, 
}

let kobe: PlayerTuple = ["Kobe", PlayerPosition["Guard"]];  //option 1.
let james: PlayerTuple = ["James", PlayerPosition.Forward]; //option 2.
let shaq: PlayerTuple = ["Shaq", PlayerPosition.Center];

let players:PlayerTuple[] = [kobe, james, shaq];
console.log(players);




