const inquirer = require('inquirer');
const fs = require('fs');

inquirer
 .prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "list",
        name: "license",
        message: "What license would you prefer to use?",
       choices: [
            "Apache License",
            "MIT License",
            "GVL License",
            "No License"
        ]
    },
    {
        type: "input",
        name: "purpose",
        message: "What is the purpose of this project?"
    },
    {
        type: "input",
        name: "achieve",
        message: "What are you trying to accomplish with this app?"
    }

]).then((answers)=>{

})

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log("Successfully created ReadMe!")
    });
}

// function init() {
//     inquirer.prompt(questions).then((answers) => {
//         const response = generateMarkdown(answers);
//         console.log(answers);

//         writeToFile("README.md", response);
//     })
// }