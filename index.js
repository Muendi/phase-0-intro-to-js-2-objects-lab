// Object code
const employee = {
        name: "Sam",
        streetAddress: "11 Broadway",
};

// returns clone with new data using spread operator
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee, [key]:value};
};

// Updates employee with the given key and value and returns the entire updated employee
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key,value){
    employee[key] = value;
    return employee;
}
// Delete key from a clone of the employee and returns new employee without modifying the new employee
function deleteFromEmployeeByKey(employee, key){
    const clonedEmployee = {...employee};
    delete clonedEmployee[key];
    return clonedEmployee;
}
clonedEmployee;
 
//Return employee without the deleted key/ value pair, modifies the original employee.
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}