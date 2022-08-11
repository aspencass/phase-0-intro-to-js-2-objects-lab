// // Write your solution in this file!

// const employee = {}
// employee.name = 'bob'
// employee.streetAddress = '123 main st'

const employee = {
    name: "cassidy",
    streetAddress: "098 main",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
       [key]: value
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee) {
    employee.name = 'Sam'
    employee.streetAddress = '12 Broadway'
    return employee;
}

function deleteFromEmployeeByKey(employee, key, value) {
    const newEmployee = {...employee,
    [key]: value}
    delete newEmployee.key;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name
    return employee
}
