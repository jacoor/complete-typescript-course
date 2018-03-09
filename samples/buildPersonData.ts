export function buildPersonData2({firstName, lastName}, ...address){
  // ellipsis here works as **kwargs in python
  return firstName + " " + lastName +" "+ address; 
} 

export default buildPersonData2;