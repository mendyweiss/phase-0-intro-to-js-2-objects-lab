// Write your solution in this!
const employee = {
    name: "Dude", 
    streetAdreess: "770 Eastern Parkway",
};
function updateEmployeeWithKeyAndValue(obj, key, value) {
  const newObject = {...employee};
  newObject[key] = value;
  return newObject;
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    const addEmployee = (obj[key] = value);
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const newObject = {...employee};
    delete newObject[key];
    return newObject;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}