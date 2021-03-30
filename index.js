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
.then((data) => {
    console.log(data);
    let selection = data.employeeTrack;
    if(selection.includes("Add")){
        addData(selection);
    }
});
init();

async function addData(selection){
    await Promise.resolve(init());
    if(selection.includes("Add")){
        inquirer.prompt({
            name: "addRecord",
            type: "list",
            message: "Would you like to add a department, role, or employee?: ",
            choices: ["Department", "Role", "Employee"]
        })
        .then((data) => {
            console.log(data);
            return
            // if(data === data.addRecord[0])
        })
    }
};