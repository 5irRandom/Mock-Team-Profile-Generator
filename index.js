const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

//no no bad bad bad does not work bad
for (let i = 0; i < 5; i++) {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'type',
                message: 'What kind of employee are they?',
                choices: [
                    'Manager',
                    'Engineer',
                    'Intern'
                ]
            }
        ])
        .then((answers) => {
            switch(answers) { //This next part is not very Dry, in hindsight there are way better ways to do this but I don't feel like doing them.
                case 'Manager':
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'name',
                                message: 'What is the Employee\'s name?',
                            },
                            {
                                type: 'input',
                                name: 'id',
                                message: 'What is the Employee\'s id?',
                            },
                            {
                                type: 'input',
                                name: 'email',
                                message: 'What is the Employee\'s email address?',
                            },
                            {
                                type: 'input',
                                name: 'office',
                                message: 'What is the Manager\'s office number?'
                            }
                            
                        ])
                        .then((answers) => {
                            console.log(answers);
                        })
                    break;
                case 'Engineer':
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'name',
                                message: 'What is the Employee\'s name?',
                            },
                            {
                                type: 'input',
                                name: 'id',
                                message: 'What is the Employee\'s id?',
                            },
                            {
                                type: 'input',
                                name: 'email',
                                message: 'What is the Employee\'s email address?',
                            },
                            {
                                type: 'input',
                                name: 'github',
                                message: 'What is the Engineer\'s github username?'
                            }
                        ])
                    break;
                case 'Intern':
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'name',
                                message: 'What is the Employee\'s name?',
                            },
                            {
                                type: 'input',
                                name: 'id',
                                message: 'What is the Employee\'s id?',
                            },
                            {
                                type: 'input',
                                name: 'email',
                                message: 'What is the Employee\'s email address?',
                            },
                            {
                                type: 'input',
                                name: 'school',
                                message: 'Where does the Intern go to school?'
                            }
                        ])
                    break;
            }
        });
}