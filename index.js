const inquirer = require('inquirer');
const fs = require('fs/promises');
const questions = require('./lib/questions');
const shapes = require('./lib/shapes');
const createLogo = require('./lib/create-logo');

inquirer
  .prompt(questions)
  .then((answers) => {
    let shape;

    if (answers.shape === 'Square') {
      shape = new shapes.Square();
    } else if (answers.shape === 'Circle') {
      shape = new shapes.Circle();
    } else {
      shape = new shapes.Triangle();
    }

    shape.setColor(answers.shapeColor);

    const logo = createLogo(answers.text, answers.textColor, shape);

    return fs.writeFile('logo.svg', logo);
  })
  .then(() => {
    console.log('Generated logo.svg');
  });