const inquirer = require('inquirer')
const fs = require('fs')
const question = () => {
  inquirer
    .prompt([
      // {
      //   type: 'input',
      //   name: 'name',
      //   message: 'What is your name?'
      // },
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project?'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please enter the installation instructions for your project.'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide the usage information of your project.'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed to this project?'
      },
      {
        type: 'input',
        name: 'test',
        message: 'What testing did you do for this project?'
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      },
      {
        type: 'list',
        name: 'choice',
        message: 'Which type of license does your application use?',
        choices: ['MIT', 'APACHE2.0', 'GPL3.0', 'BSD3', 'None']
      }
    ])
    .then(res => {
 