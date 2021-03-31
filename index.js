// Import required modules and db
const inquirer = require("inquirer");
const db = require("./db");

// Initialize prompt to ask users whether they
// want to add departments, roles, and employees;
// view departments, roles, and employees;
// update employee roles
const init = async () => {
  const { employeeTrack } = await inquirer.prompt({
    name: "employeeTrack",
    type: "list",
    message: "Please select an action",
    choices: [
      "Add departments",
      "Add roles",
      "Add employees",
      "View employees by departments",
      "View employees by roles",
      "Update employee roles",
      "EXIT"
    ],
  });

  // Return functions to add, view, or update records to the database
  // depending on a user's choice
  switch (employeeTrack) {
    case "Add departments":
      addDept();
      break;
    case "Add roles":
      addRole();
      break;
    case "Add employees":
      addEmp();
      break;
    case "View employees by departments":
        viewDept();
        break;
    case "View employees by roles":
        viewRole();
        break;
    case "Update employee roles":
        updateEmp();
        break;
    default:
        process.exit(0);
  }
};
init();

const addDept = async () => {
    const { newDept } = await inquirer.prompt({
      name: "newDept",
      type: "input",
      message: "Please enter the name of the new department: ",
    });
    db.query(
      `INSERT INTO department (name) VALUES ('${newDept}')`,
      (err, res) => {
        if (err) throw err;
        console.table(res);
        console.log(`Added ${newDept} to department table!`);
      }
    );
    init();
  };

  const addRole = async () => {
    const { newRole, newRoleDept } = await inquirer.prompt([
      {
        name: "newRole",
        type: "input",
        message: "Please enter the title of the new role: ",
      },
      {
        name: "newRoleDept",
        type: "input",
        message: "Please input the new roles' department id: ",
      },
    ]);
  
    db.query(
      `INSERT INTO role (title, department_id) VALUES ('${newRole}', ${newRoleDept})`,
      (err, res) => {
        if (err) throw err;
        console.table(res);
        console.log(`Added ${newRole} to role table!`);
      }
    );
    init();
  };
  
  const addEmp = async () => {
    const { newEmpFirstName, newEmpLastName, newEmpRole } = await inquirer.prompt(
      [
        {
          name: "newEmpFirstName",
          type: "input",
          message: "Please enter the first name of the new employee: ",
        },
        {
          name: "newEmpLastName",
          type: "input",
          message: "Please enter the last name of the new employee: ",
        },
        {
          name: "newEmpRole",
          type: "input",
          message: "Please input the new employees' role id: ",
        },
      ]
    );
    db.query(
      `INSERT INTO employee (first_name, last_name, role_id) VALUES ('${newEmpFirstName}', '${newEmpLastName}', ${newEmpRole})`,
      (err, res) => {
        if (err) throw err;
        console.table(res);
        console.log(
          `Added ${newEmpFirstName} ${newEmpLastName} to employee table!`
        );
      }
    );
    init();
  };
  
  const viewDept = () => {
    db.query(
      "SELECT department.name, employee.first_name, employee.last_name FROM department RIGHT JOIN employee ON department.id = employee.role_id ORDER BY department.id", (err, res) => {
          if (err) throw err;
          console.table(res);
      });
      init();
  };
  
  const viewRole = () => {
      db.query(
        "SELECT role.title, employee.first_name, employee.last_name FROM role LEFT JOIN employee ON role.id = employee.id ORDER BY role.id", (err, res) => {
            if (err) throw err;
            console.table(res);
        });
        init();
    };
  
  const updateEmp = () => {
      db.query("UPDATE role SET title = 'Salesperson' WHERE title = 'Paper Pusher'", (err, res) => {
          if (err) throw err;
          console.log(res);
      })
      init();
  }