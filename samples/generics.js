"use strict";
// generic types
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var heroes = [
    { name: "Superman" },
    { name: "Batman" },
    { name: "Green Lantern" },
    { name: "Wonder Woman" },
    { name: "Flash" },
];
// function cloneArray(array:any[]):any[]{
//    return array.slice(0);
// }
// The problem: cloneArray returns array of any type,
// so the type of "HasName" on heroes is lost.
// Clones array has elements of type "any".
// The version of cloneArray below prevents this kind of error by defining
// type to use inside function.
function cloneArray(array) {
    return array.slice(0);
}
var clones = cloneArray(heroes); // this is now of type "HasName";
console.log("Clones", clones);
// this will also work for primitive typescript
var numbers = [1, 2, 3];
var clonedNumbers = cloneArray(numbers); // clonedNumbers has type "number".
// generic classes
var SuperCharacter = /** @class */ (function () {
    function SuperCharacter(name) {
        this.name = name;
    }
    return SuperCharacter;
}());
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Hero;
}(SuperCharacter));
;
var Villain = /** @class */ (function (_super) {
    __extends(Villain, _super);
    function Villain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Villain;
}(SuperCharacter));
;
var SuperTeam = /** @class */ (function () {
    function SuperTeam(members, leader) {
        this.members = members;
        this.leader = leader;
    }
    return SuperTeam;
}());
// define few heroes
var captainAmerica = new Hero("captainAmerica");
var thor = new Hero("Thor");
var ironMan = new Hero("Iron Man");
var avengers = new SuperTeam([captainAmerica, thor, ironMan], captainAmerica);
// what type of members are in avengers?
// this returns "SuperCharacter" so we don't know if those
// are "Heroes" or "Villains"
var members = avengers.members;
//lets redefine SuperTeam to keep type
var SuperTeamWithType = /** @class */ (function () {
    function SuperTeamWithType(members, leader) {
        this.members = members;
        this.leader = leader;
    }
    return SuperTeamWithType;
}());
// and new avengers
var newAvengers = new SuperTeamWithType([captainAmerica, thor, ironMan], captainAmerica);
var newAvengersMembers = newAvengers.members; // and now this is of type Hero
// now for the team of villains
var luthor = new Villain("Luthor");
var bizzaro = new Villain("Bizzaro");
var captainCold = new Villain("Captain Cold");
var legionOfDoom = new SuperTeamWithType([luthor, bizzaro, captainCold], luthor);
var legionOfDoomMembers = legionOfDoom.members; // type villain
// now lets mix the villains and Heroes
var mixedTeam = new SuperTeamWithType([captainAmerica, thor, ironMan, luthor, bizzaro, captainCold], captainAmerica);
var mixedTeamMembers = mixedTeam.members; // and the type is "Hero"!;
// actually in the course it is union of Hero|Villain
// bad thing is that SuperTeamWithType will accept any type
var numbers1 = [1, 2, 3];
var numbersTeam = new SuperTeamWithType(numbers1, 0);
// this can be prevented
var SuperTeamWithTypeNarrowed = /** @class */ (function () {
    function SuperTeamWithTypeNarrowed(members, leader) {
        this.members = members;
        this.leader = leader;
    }
    return SuperTeamWithTypeNarrowed;
}());
// this trhows compilation eror preventing wrong data assignments
// const numbers2:number[] = [1, 2, 3]
// const numbersTeam1 = new SuperTeamWithTypeNarrowed(numbers2, 0);
//# sourceMappingURL=generics.js.map