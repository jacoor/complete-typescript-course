// examples of object oriented programming in ts.

enum Editor {
  MARVEL,
  DC
}

// interface example
interface CanFly{
  fly(message:string):void;
}

// interfaces can also have properties, unlike other languages. Important thing
// is that those properties needs to be public :/
interface Hero{
  name:string;
}

// interesting thing is that objects can also implement interface
const batman:Hero = {
  name:"BatMan"
}

class SuperHero implements Hero{
  // at this point there is no initializer so compiler complains.
  // the trick is to use constructor method
  // the commented out code and constructor function is rather verbose
  // so there is a shorthand version
  // name:string;
  // editor: Editor;
  // creationYear: number;
  // constructor(
  // name:string,
  // editor: Editor,
  // creationYear: number){
  //   this.name = name;
  //   this.editor = editor;
  //   this.creationYear = creationYear;
  // }

  // Shorthand constructor version with private/protected class variables.
  // Interesting is constructor still allows to set those w/o complaining.
  // Other way is to set those variables to readonly.
  // Even more interesting is private and protected. All can be used in
  // this declaration and set up in constructor!
  // Note: since the constructor method is not redeclared in FlyingHero
  // private variable creationYear is set on the object and printed
  // out in introduceSelf method of FlyingHero. However, other methods
  // of FlyingHero have no access to it. That's a bug.
  constructor(
    public name:string,
    protected _editor: Editor,
    private creationYear:number){
      this.creationYear = creationYear;
  }

  // getters example
  get editor():string{
    return Editor[this._editor];
  }

  get introduction():string{
    return `
      Super hero
      ${this.name}
      ${this.editor}
      ${this.creationYear}`;
  }

  //setters example
  set editor(editorName:string){
    this._editor = (<any>Editor)[editorName];  //type casting example
  }
};

// inheritance example along with interface
class FlyingHero extends SuperHero implements CanFly{
  public fly(message:string){
    console.log(message);
  }
}

const greenLantern = new FlyingHero(
  "Silver Age Green Lantern",
  Editor.DC,
  1958
);

console.log(greenLantern.introduction);

const superman = new FlyingHero("Superman", Editor.MARVEL, 1938);
superman.editor = "DC";

console.log("Superman", superman);
console.log(superman.introduction);
superman.fly("Up and away!");

// the below .hasOwnProperty was not sugested by autocomplete.
// how to fix? It's only atom problem.
console.log(superman.hasOwnProperty("name"));
