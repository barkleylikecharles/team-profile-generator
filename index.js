
const generateHtml = require("./utils/generateHtml")
//Inquirer
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");

const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

let teamArr = [];
let teamTitle = [];
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
        teamTitle.push(teamName)
        addManager();
    
    })
};

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
        },
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
            choices: ["Yes - Engineer", "Yes - Intern", "No, my team is complete"],
            name: "addMembers"
        }
    ])
    .then(function(data) {
        const role = "Manager"
        switch (data.addMembers) {
            case "Yes - Engineer":
                addEngineer();
                break;

            case "Yes - Intern":
                addIntern();
                break;

            case "No, my team is complete":
                createTeam();
                break;

            default: addMembers();
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
                message: "What is the engineer's email address?",
                name: "email"
            },
            {
                type: "input",
                message: "What is the engineer's github username?",
                name: "github"
            }
    ])
        .then(function(data) {
            const name = data.name
            const id = data.id
            const email = data.email
            const github = data.github
            const role = "Engineer"
            const teamMember = new Engineer (name, id, email, github)
            teamArr.push(teamMember);
            addMembers();
            })
        }



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
                }
            ])
            .then(function(data) {
                const name = data.name
                const id = data.id
                const email = data.email
                const school = data.school
                const role = "Intern"
                const teamMember = new Intern (name, id, email, school)
                teamArr.push(teamMember)
                addMembers();
                });
            
        };
function createTeam() {
    inquirer.prompt ([
        {
        type: 'confirm',
        name: 'confirmCreateHtml',
        message: 'Would you like to generate the Team HTML',
      }
    ])
      .then (userAnswer => {
          if (userAnswer.confirmCreateHtml == true) {
              writeToFile();
          }
          else {
              addMembers();
          }
      })
    };
    // TODO: Create a function to write html file

function writeToFile() {

    fs.writeFile('generateHtml.html', generateHtml(teamArr, teamTitle), err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the HTML has been created 
        } else {
            console.log("Your HTML has been successfully created!")
        }
    })
}
//Function to initalize app
// startApp()
// //Get user answers
// .then(answers => {
//     return generateHtml(answers);
// })
// // Display data 
// .then(data => {
//     return writeFile(data);
// })
// // Catch errors
// .catch(err => {
//     console.log(err)
// })

        
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

        