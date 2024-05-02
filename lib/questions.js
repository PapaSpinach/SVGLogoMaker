const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Input logo text (up to 3 characters):',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Input text color:',
    },
    {
      type: 'list',
      name: 'shape',
      choices: ['Circle', 'Square', 'Triangle'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Input shape color:',
    },
  ];
  
  module.exports = questions;
  