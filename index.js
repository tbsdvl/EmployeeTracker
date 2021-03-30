// Import required modules and db
const inquirer = require("inquirer");
const connection = require("./db");

// Initialize prompt to ask users whether they
// want to add departments, roles, and employees;
// view departments, roles, and employees;
// update employee roles

const init = () => (

    inquirer.prompt({
        name: "employeeTrack",
        type: "list",
        message: "Please select an action",
        choices: ["Add departments, roles, or employees", 
        "View departments, roles, or employees",
        "Update employee roles"]
    })
)
.then((data) => (
    console.log(data)
));
init();