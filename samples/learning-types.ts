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

interface Player {
    name: string,
    position: PlayerPosition,
}

// these two won't work, compiler cries an error. It probably works in old version of ts. 
// to make it work "or" statement is necessary.
let kobe1:Player | null | undefined = {
    name: "Kobe",
    position: PlayerPosition["Guard"]
}

console.log(kobe1);
kobe1 = null;
kobe1 = undefined;

// control flow analysis in action

function createMessage(name:string):string{
    if (name){
        return `Hello, my name  is ${name}`;
    }
    // typescript control flow complains here that there is no return statement.
    // the reality is that the program returns undefined which is not what tsc expects.
    return "";
}

console.log(createMessage("Bob"));

// introducing any type

type PlayerType = (hasName & hasAddress) | null;
const player: PlayerType = {
    firstName: "Magic",
    lastName: "Johnson",
    street: "Staples"
}

console.log(player);

let myVar: any;

myVar = 0;
myVar = "a";
myVar = {};
myVar = [];
myVar = null;
myVar = undefined;
myVar = {};

// you can assign variable with type Any to any other variable (which is not so obvious);

let myCounter = 0;
counter = myVar; // yea, and it's undefined!;

let str: string = "";
str = myVar;  // and it's still any, ie object. 

// implicit any compiler option

const playerWithoutType = {
    firstName: "Magic",
    lastName: "Johnson",
    street: "Staples"
}
 // with NoImplicitAny tsc option compiler will automatically determine the type of playerWithoutType here as the 
 // json object above.

// more examples
// in this case tsc returns an error and automatically assigns any type to this variable "message";
function createAnyTypeMessage(message: string){  // string added manually
}

// main takeaway: tsc in previous versions didn't throw an error if types were not defined, 
// for backwards compatibility. Using the implicitAny option forces compiler to throw an error when 
// the type on variable is not defined. 

// how to handle 3rd party libraries? Defining types for those is simply impossible as those are often
// written in plain JS or simply are too big to fix. 