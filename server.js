// require mysql
const mysql = require("mysql");
// require inquire
const inquirer = require("inquire");
const { createConnection } = require("net");
const { start } = require("repl");
// require console table
require("console.table");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "",
    database: "classlist_db",
  },
  console.log(`Connected to the classlist_db database.`)
);

// If unable to connect present error
connection.connect(function (err) {
  if (err) throw err;
  // run prompts if connection established
  primaryPrompt();
});
// Initial prompt presented to user
function primaryPrompt() {
  inquirer.prompt([
    {
      type: "List",
      name: "userImput",
      message: "Please choose action",
      choices: [
        "View all Departments",
        "View all Roles",
        "View all Employees",
        "Add a Department",
        "Add a Role",
        "Add an Employee",
        "Update an Employee Role",
      ]

    }

  ]).then((res) => {
    console.log(res.userChoice);
    switch(res.userChoice){
        case 'View all Departments':
            viewAllDepartments();
            break;
        case 'View all Roles':
            viewAllRoles();
            break;
        case 'View all Employees':
            viewAllEmployees();
            break;
        case 'Add a Department':
            addDepartment();
            break;
        case 'Add a Role':
            addRole();
            break;
        case 'Add an Employee':
            addEmployee();
            break;
        case 'Update Employee Role':
            updateEmployeeRole();
            break; 
        case 'Quit':
            quit();
            break; 
    }

  }).catch((err) => {
    if(err)throw err; 
  });
}

// Departments 

function viewAllDepartments(){
    const request = "SELECT * FROM employees";
    db.query(request, function(err, res) {
        if (err) throw err;
        console.log("Displaying Employees");
        console.table(res);
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'choose an option',
                choices: [
                    'Return to Homepage',
                    'Quit'
                ],

            }
        ]).then((answer) => {
            switch (answer.choice){
                case 'Main Menu':
                    primaryPrompt();
                    break;
                    case 'Quit':
                        quit();

            }

        })

    })

}

// ROLES

function viewAllRoles(){
    let request = "SELECT * FROM roles";
    db.query(request, function(err, res) {
        if (err) throw err;
        console.log("Displaying all Roles");
        console.table(res);
        inquirer.prompt([
            {
                type: 'List',
                name: 'choice',
                message: 'choose an option',
                choices: [
                    'Return to Homepage',
                    'Quit'
                ]
            }
        ]).then((answer) => {
            switch (answer.choice){
                case 'Main Menu':
                    primaryPrompt();
                    break;
                case 'Quit':
                    quit();
            }

        })

    })
}; 

// Employeezus

function viewAllEmployees(){
    const request = "SELECT * FROM employees";
    db.query(request, function(err, res) {
        if (err) throw err; 
        console.log("Displaying Employees");
        console.table(res);
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'Choose an option',
                choices: [
                    'Main Menu',
                    'Quit'
                ],

            }

        ]).then((answer) => {
            switch (answer.choice){
                case 'Main Menu':
                    primaryPrompt();
                    break;
                case 'Quit':
                    quit();
            }
        })

    })

}; 

// create new department

function addDepartment(){
    console.log('Creating new department!')
    inquirer.prompt ([
        {
            type: 'input',
            message: 'Enter new department name',
            name: 'Department Name'
        }
    ]).then(function (response) {

    })
}