//index.js file to render user input to created markdown file

// declare libraries and other js files to be used for application
const inquirer = require('inquirer');
const fs = require('fs');
const mdContent = require('./utils/markdownContent');

function getInput() {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'What should this ReadMe file\'s name to be?',
      name: 'fileName', 
    },
    {
      type: 'input',
      message: 'What is this application\'s title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What should be included in this application\'s description?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the installation instructions?',
      name: 'install',
    },
    {
      type: 'input',
      message: 'How is this application intended to be used?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'How does one contribute to this application?',
      name: 'contribution'
    },
    {
      type: 'input',
      message: 'How does one test this application?',
      name: 'test',
    },
    {
      type: 'list',
      message: 'Please choose a license for this application',
      name: 'license',
      choices: [
        'Apache 2.0 License', 
        'Boost Software License 1.0',
        'BSD 3-Clause License', 
        'BSD 2-2lause License', 
        'Creative Commons Zero 1.0 Universal', 
        'Creative Commons Attribution 4.0 International', 
        'Creative Commons Attribution-ShareAlike 4.0 International', 
        'Creative Commons Attribution-NonCommercial 4.0 International',
        'Creative Commons Attribution-NoDerivates 4.0 International',
        'Creative Commons Attribution-NonCommmercial-ShareAlike 4.0 International',
        'Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International',
        'Eclipse Public License 1.0',
        'GNU General Public License v3.0', 
        'GNU General Public License v2.0', 
        'GNU Affero General Public License v3.0',  
        'GNU Lesser General Public License v3.0',
        'GNU Free Documentation License v1.3',
        'The Hippocratic License 3.0',
        'The Hippocratic License 2.1',
        'IBM Public License Version 1.0',
        'ISC License', 
        'MIT', 
        'Mozilla Public License 2.0',
        'Open Data Commons Attribution License',
        'Open Data Commons Open Database License', 
        'Open Data Commons Public Domain Dedication and License',
        'The Artistic License 2.0',
        'SIL Open Font License 1.1',
        'The Unlicense',
        'ZLib The zilb/libpng License'],
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    }
  ]);
}

// function to create a readme file
function writeToFile (fileName, data) {
  fs.appendFile(`${fileName}.md`, data, (err) =>
    err ? console.log(err) : console.log(`${fileName}.md was successfully generated.`));
}

//function to tell app to wait for user input prior to md generation
async function init() {
  let data = await getInput();
  writeToFile((data.fileName),(mdContent(data)));
}

//function call to initialize app
init();
