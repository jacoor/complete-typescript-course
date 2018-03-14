// generic types

interface HasName{
  name: string;
}

const heroes: HasName[] = [
  {name: "Superman" },
  {name: "Batman"},
  {name: "Green Lantern"},
  {name: "Wonder Woman"},
  {name: "Flash"},
]

// function cloneArray(array:any[]):any[]{
//    return array.slice(0);
// }
// The problem: cloneArray returns array of any type,
// so the type of "HasName" on heroes is lost.
// Clones array has elements of type "any".
// The version of cloneArray below prevents this kind of error by defining
// type to use inside function.
function cloneArray<T>(array:T[]):T[]{
   return array.slice(0);
}
const clones = cloneArray(heroes);  // this is now of type "HasName";

console.log("Clones", clones);

// this will also work for primitive typescript
const numbers:number[] = [1, 2, 3];
const clonedNumbers = cloneArray(numbers);  // clonedNumbers has type "number".

// generic classes

class SuperCharacter{
  constructor(public name: string){

  }
}

class Hero extends SuperCharacter{};

class Villain extends SuperCharacter{};

class SuperTeam{
  constructor (
    public members: SuperCharacter[],
    public leader: SuperCharacter){

  }
}

// define few heroes

const captainAmerica = new Hero("captainAmerica");
const thor = new Hero("Thor");
const ironMan = new Hero("Iron Man");

const avengers = new SuperTeam([captainAmerica, thor, ironMan], captainAmerica);
// what type of members are in avengers?
// this returns "SuperCharacter" so we don't know if those
// are "Heroes" or "Villains"
const members = avengers.members;

//lets redefine SuperTeam to keep type
class SuperTeamWithType<T>{
constructor (
  public members: T[],
  public leader: T){

  }
}
// and new avengers
const newAvengers = new SuperTeamWithType(
  [captainAmerica, thor, ironMan], captainAmerica);

const newAvengersMembers = newAvengers.members;  // and now this is of type Hero

// now for the team of villains
const luthor = new Villain("Luthor");
const bizzaro = new Villain("Bizzaro");
const captainCold = new Villain("Captain Cold");

const legionOfDoom = new SuperTeamWithType(
  [luthor, bizzaro, captainCold],
  luthor
)

const legionOfDoomMembers = legionOfDoom.members;  // type villain

// now lets mix the villains and Heroes
const mixedTeam = new SuperTeamWithType(
  [captainAmerica, thor, ironMan, luthor, bizzaro, captainCold],
  captainAmerica
)

const mixedTeamMembers = mixedTeam.members;  // and the type is "Hero"!;
// actually in the course it is union of Hero|Villain

// bad thing is that SuperTeamWithType will accept any type
const numbers1:number[] = [1, 2, 3]
const numbersTeam = new SuperTeamWithType(numbers1, 0);

// this can be prevented
class SuperTeamWithTypeNarrowed<T extends SuperCharacter>{
constructor (
  public members: T[],
  public leader: T){

  }
}
// this trhows compilation eror preventing wrong data assignments
// const numbers2:number[] = [1, 2, 3]
// const numbersTeam1 = new SuperTeamWithTypeNarrowed(numbers2, 0);
