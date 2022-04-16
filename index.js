//Inquirer
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");

const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

let teamArr = [];
//Start application and request team name.
function startApp () {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter your team name to begin building your profile.",
            name: "teamName"
        }
    ])
    .then(function(data) {
        const teamName = data.teamName
        teamArr.push(teamName)
        addManager();
    
    })

// Begin by adding manager to team array
function addManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the team's manager?",
            name: "name"
        },
        {
            type: "number",
            message: "What is the manager's employee id#?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the manager's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the manager's office phone number?",
            name: "officeNumber"
        }
    ])
    .then(function (data) {
        const name = data.name
        const id = data.id
        const email = data.email
        const officeNumber = data.officeNumber
        const teamMember = new Manager (name, id, email, officeNumber)
        teamArr.push(teamMember)
        addMembers();
    });
}
// Add other employees under manager and give and option to choose which type of employee
function addMembers() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: ["Yes - Engineer", "Yes -  Intern", "No, my team in complete"],
            name: "addMembers"
        }
    ])
    .then(function(data) {
        switch (data.addMembers) {
            case "Yes - Engineer":
                addEngineer();

            case "Yes - Intern":
                addIntern();

            // case "No, my team is complete";
            //     //createTeam()
        }
    });
};
function addEngineer() {
    inquirer.prompt([
            {
                type: "input",
                message: "What is the engineer's name?",
                name: "name"
            },
            {
                type: "number",
                message: "What is the engineer's employee id#?",
                name: "id"
            },
            {
                type: "input",
                message: "What is the manager's email address?",
                name: "email"
            },
            {
                type: "input",
                message: "What is the engineer's github username?",
                name: "github"
            },
    ])
        .then(function(data) {
            const name = data.name
            const id = data.id
            const email = data.email
            const github = data.github
            addMembers();
            });
        }
    };

function addIntern() {
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is the intern's name?",
                    name: "name"
                },
                {
                    type: "number",
                    message: "What is the intern's employee id#?",
                    name: "id"
                },
                {
                    type: "input",
                    message: "What is the intern's email address?",
                    name: "email"
                },
                {
                    type: "input",
                    message: "Where does the intern go to school?",
                    name: "school"
                },
            ])
            .then(function(data) {
                const name = data.name
                const id = data.id
                const email = data.email
                const school = data.school
                addMembers();
                });
        };
    
        
startApp();
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
        