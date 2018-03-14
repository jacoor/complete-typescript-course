// decorators examples

enum LoggingLevel {
  INFO,
  WARNING,
  DEBUG,
  TRACE,
}

const loggingLevel = LoggingLevel.DEBUG;

function LogMethod(level:LoggingLevel):Function{
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    // console.log("target: ", target);
    // console.log("propertyKey: ", propertyKey);
    // console.log("descriptor: ", descriptor);
    // console.log(descriptor.value);
    const originalFunction:Function = descriptor.value;

    // descriptor.value is the function that is decorated
    // (saveData in this case).
    // The function is completely overwritable so you can create completely
    // different function.
    descriptor.value = function(...args:any[]){
      // important. Don't use arrow function to overwrite descriptor.value
      // because it will destroy reference to "this".
      // Instead, use old way with function(...args:any) as defined above.
      // This is actually rare case where arrow function should not be used.

      // Adding logging functionality
      if (level <= loggingLevel){
        console.log(`>> ${propertyKey} ${JSON.stringify(args)}`);
      }
      originalFunction.apply(this, args);
    }
  }
}

class Database {
  name = "CTCDB";
  // method decorator
  @LogMethod(LoggingLevel.DEBUG)
  saveData(data:any){
    console.log(
      `Saving data to database: ${this.name}  ${JSON.stringify(data)}`);
  }
}

const db = new Database();

db.saveData({"message": "Saving the data!"});


// class decorators
function registerORMModel(model:Function){
  console.log(`registering orm models ${model}`);
}
// class decorator itself
function Entity(tableName: string){
  return (
    target: Function) => {
      // console.log("target: ", target);
      // console.log("propertyKey: ", propertyKey);
      // console.log("descriptor: ", descriptor);
      registerORMModel(target);
  }
}

// property decorator itself
function Column(columnName:string){
  return (target:any, propertyKey:string) => {
    console.log();
    console.log("target", target);
    console.log("propertyKey", propertyKey);
    console.log();
  }
}

// class decorator
@Entity("TODOS")
class ToDo {
  //property decorators
  @Column("DESCR")
  description: string = "";
  done = false;
}
