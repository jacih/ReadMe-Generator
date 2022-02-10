//index.js file to render user input to created markdown file

// declare libraries and other js files to be used for application
const inquirer = require('inquirer');
const fs = require('fs');
const generator = require('./generator');

const renderMarkup = ( { fileName, title, description, install, usage, contribution, test, license, github, email } ) =>
    
  generator();
  inquirer.prompt([
    {
    //when I enter name my markdown file
    },
    {
    // WHEN I enter my project title
    },
    {
    //when I enter description
    },
    {
    //when I enter installation instructions
    },
    {
    // when I enter usage information
    },
    {
    // when I enter contribution guidelines
    },
    {
    //when I enter test instructions
    },
    {
    //when I choose a license
    },
    {
    //when I enter my Github name
    },
    {
    //when I enter my email address
    }
  ]).then((data) => {
    const markupContent = renderMarkup(data);

    fs.writeFile(`${fileName}`, markupContent, (err) =>
      err ? console.log(err) : console.log(`${fileName}.md was successfully generated.`));
    });
