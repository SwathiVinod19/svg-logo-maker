const inquirer = require('inquirer');
const fs = require('fs');
const {generateLogo} = require('./lib/shapes.js');
const {colorKeywords, colorHashes} = require('./lib/color.js');
const fileName = './output/logo.svg';

const questions = [
    //shapes
    {
        name: 'shape',
        type: 'list',
        message: 'What shape do you want your logo to be?',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        name: 'shapeColorChoice',
        type: 'list',
        message: 'What color do you want your logo to be? Choose a format',
        choices: ['Color keyword', 'Hexadecimal number'],
    },
    {
        name: 'shapeColor',
        type: 'list',
        message: 'Choose a color',
        choices: (answers) => {
            // console.log(answers)
            if(answers.shapeColorChoice === "Color keyword"){
                // console.log(answers);
                return colorKeywords
            }
            return colorHashes
        },
    },
    //Text
    {
        name: 'text',
        type: 'input',
        message: 'What text do you want on your logo. Please type three characters maximum.',
        validate: (answers) => {
            // console.log(answers);
            if (answers.length > 3){
                return console.log("\n Text must be three characters or less! Please try again! ");
            }
            return true;
        }
    },

    //Text Color
    {
        name: 'textColorChoice',
        type: 'list',
        message: 'What color do you want your text to be? Choose a format',
        choices: ['Color keyword', 'Hexadecimal number'],
    },
    {
        name: 'textColor',
        type: 'list',
        message: 'Choose a color',
        choices: (answers) => {
            if(answers.textColorChoice === "Color keyword"){
                return colorKeywords
            }
            return colorHashes
        },
    }
   
];

function createLogo(response) {
    const svg = generateLogo(response);
    fs.writeFile(fileName, svg, () => console.log('SVG logo is generated in the output folder'));
}

function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            // console.log(`Here are the options you chose !`, response);
           createLogo(response)
        })
}

init();



