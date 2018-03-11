// how to avoid any on firstname/lastname dict?
// create a type with these data, ie persomType and use to replace the dict in question.
// type PersonType = {
//     firstName: string,
//     lastName: string
// }
// so the function signature will look like: 
// function buildPersonData2({firstName, lastName}:PersonType, ...address:any[]){
export function buildPersonData2({firstName, lastName}:any, ...address:any[]){
  // ellipsis here works as **kwargs in python
  return firstName + " " + lastName +" "+ address; 
} 

export default buildPersonData2;