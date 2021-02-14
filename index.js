const { restoreDefaultPrompts } = require("inquirer");
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");



// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"Project Title",
        name:"title"
    },
    {
        type:"input",
        message:"a description",
        name:"description"
    },
    {
        type:"input",
        message:"any needed dependencies?",
        name:"installation"
    },
    {
        type:"input",
        message:"Why do we use these app?",
        name:"usage"
    },
    {
        type:"input",
        message:"Any contribution guildlines",
        name:"contribution"
    },
    {
        type:"input",
        message:"Test Instructions",
        name:"tests"
    },
    {
        type:"list",
        message:"What license?",
        choices:["MIT","IBM","Apache"],
        name:"license"
    },
    {
        type:"input",
        message:"my Github",
        name:"github"
    },
    {
        type:"input",
        message:"my email",
        name:"email"
    },


];

//table of contenst, installation, usage, license, contributing, testing instructions


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`,data,()=>{
        
    })


}

// TODO: Create a function to initialize app
function init() {

inquirer.prompt(questions).then((promise) => 
// console.log(generateMarkdown(promise)),
writeToFile(promise.title,generateMarkdown(promise))
);
}

// Function call to initialize app
init();

