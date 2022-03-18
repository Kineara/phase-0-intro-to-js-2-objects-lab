const employee = {
    name: "Riley",
    streetAddress: "1st Ave"
};

function updateEmployeeWithKeyAndValue (newEmployee, key, value) {
    newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(newEmployee, key) {
    newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
