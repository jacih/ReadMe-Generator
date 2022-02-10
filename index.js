//index.js file to render user input to created markdown file

// declare libraries and other js files to be used for application
const inquirer = require('inquirer');
const fs = require('fs');
const generator = require('./generator');

const renderMarkup = ( { fileName, title, description, install, usage, contribution, test, license, github, email } ) =>
    
  generator();// do I need to do this? how does generator js speak with index js??
  inquirer.prompt([
    {
      type: 'input',
      message: 'What should this ReadMe file\'s name to be?',
      name: 'fileName',
    },
    {
      type: 'input',
      message: 'What is this application\'s title?',
      name: 'fileName',
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
      choices: [ // placeholders!
        'Academic Free License v3.0', 
        'Apache license 2.0', 
        'Artistic license 2.0', 
        'Boost Software License 1.0', 
        'BSD 2-clause license', 
        'BSD 3-clause license', 
        'Creative Commons Zero v1.0 Universal', 
        'Creative Commons Attribution 4.0', 
        'Creative Commons Attribution Share Alike 4.0', 
        'Do What The Fuck You Want To Public License', 
        'Educational Community License v2.0', 
        'Eclipse Public License 1.0', 
        'Eclipse Public License 2.0', 
        'European Union Public License 1.1', 
        'GNU Affero General Public License v3.0', 
        'GNU General Public License v2.0', 
        'GNU General Public License v3.0',  
        'GNU Lesser General Public License v2.1', 
        'GNU Lesser General Public License v3.0', 
        'ISC', 
        'LaTeX Project Public License v1.3c', 
        'Microsoft Public License',
        'MIT', 
        'Mozilla Public License 2.0', 
        'Open Software License 3.0', 
        'SIL Open Font License 1.1', 
        'University of Illinois/NCSA Open Source License', 
        'The Unlicense', 
        'zLib License'],
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

  ]).then((data) => {
    const markupContent = renderMarkup(data);

    fs.writeFile(`${fileName}`, markupContent, (err) =>
      err ? console.log(err) : console.log(`${fileName}.md was successfully generated.`));
    });
