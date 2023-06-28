[![Node.js](https://img.shields.io/badge/Node.js-18.16.1-brightgreen.svg)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)](https://www.ecma-international.org/ecma-262/)
[![Inquirer.js](https://img.shields.io/badge/Inquirer.js-8.2.4-blue.svg)](https://www.npmjs.com/package/inquirer)
[![fs](https://img.shields.io/badge/fs-Node.js-yellowgreen.svg)](https://nodejs.org/api/fs.html)	
[![Jest](https://img.shields.io/badge/Jest-29.5.0-red.svg)](https://jestjs.io/)
[![GitHub](https://img.shields.io/badge/GitHub-SwathiVinod19-black.svg?logo=github)](https://github.com/Swathivinod19)

# svg-logo-maker
A Node.js command-line application that takes in user input to generate a logo and save it as an SVG file.

## Motivation
To make an application that uses Inquirer for collecting input from the user and jest package for running the unit tests in Node js. It is made as a part of the UofT bootcamp challenge. 

## Table of content 
[License](#License)

[Installation](#Installation)

[Usage](#Usage)

[User Story](#User-story)

[Features](#Features)

[Screenshots](#Screenshots)

[Walkthrough Video](#Walkthrough-video)

[Contributions](#Contributions)

[Tests](#Tests)

[Acknowledgements](#Acknowledgements)

[Questions?](#Questions)

## License 
MIT License
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Installation:
Check if you have Node.js installed by typing "node -v" in your command line. 
If node is not installed, visit the Node.js website to install the current recommended version. 
Next, clone this project repository to your local machine. 
Use the command "npm install" in the terminal to install dependencies. 
Use the command "npm install --save-dev jest" to install Jest as a devDependency. 
Go to package.json and type in “jest” next to the “test :”

## Usage:
Change directories or right click on the folder to open “integrated terminal”. 
Type "node index.js" in the terminal. You will be asked a series of questions before your logo is generated. 

## User Story
>>
>>AS a freelance web developer
>>I WANT to generate a simple logo for my projects
>>SO THAT I don't have to pay a graphic designer
>>

## Features
>>
>>GIVEN a command-line application that accepts user input
>>
>>WHEN I am prompted for text
>>THEN I can enter up to three characters
>>
>>
>>WHEN I am prompted for the text color
>>THEN I can enter a color keyword (OR a hexadecimal number)
>>
>>
>>WHEN I am prompted for a shape
>>THEN I am presented with a list of shapes to choose from: circle, triangle, and square
>>
>>
>>WHEN I am prompted for the shape's color
>>THEN I can enter a color keyword (OR a hexadecimal number)
>>
>>
>>WHEN I have entered input for all the prompts
>>THEN an SVG file is created named `logo.svg`
>>
>>
>>AND the output text "Generated logo.svg" is printed in the command line
>>WHEN I open the `logo.svg` file in a browser
>>THEN I am shown a 300x200 pixel image that matches the criteria I entered
>>

## Screenshots
![image](https://github.com/SwathiVinod19/svg-logo-maker/assets/129353324/4d12ee66-307e-4636-8063-8af9033326bf)

screenshot of the prompts

![svg-logo-maker-options-screenshot](https://github.com/SwathiVinod19/svg-logo-maker/assets/129353324/ae12335b-313e-4e62-b0f6-8b8a5b8ffcd9)

screenshot of the options

![svg-logo-maker-hexadecimal](https://github.com/SwathiVinod19/svg-logo-maker/assets/129353324/2371b7cf-e9eb-42c6-9fca-84ea0a9e5690)

hexadecimal options being listed

![svg-logo-maker-color-keyword](https://github.com/SwathiVinod19/svg-logo-maker/assets/129353324/5da2b3da-c96f-4839-98b0-c0e6e3f6814e)

color keywords being listed

![svg-logo-maker-output](https://github.com/SwathiVinod19/svg-logo-maker/assets/129353324/41cf119f-51ab-4d77-9e3b-b0bd84707865)

output in vs code


## Walkthrough video
[Video link](https://drive.google.com/file/d/191nIyWMRgcs6TjybrB-m_Qb_D0VBnedw/view)

## Contributions :
 Contact me for any contribution ideas or requests.

## Tests
Each shape class (Circle, Square, and Triangle) is tested for a render() method that returns a string for the corresponding SVG file matching color and text requests. 
Type "npm test" or “npm run test” or “npx jest shapes.test.js” in the command line and Jest will run all three tests.

## Acknowledgements
I would like to thank my tutor and peers for their support and guidance and my family for being patient with me.

## Questions
Please contact me for any questions
[Email me](swathi.vinod@gmail.com)

[Github](https://github.com/SwathiVinod19)







