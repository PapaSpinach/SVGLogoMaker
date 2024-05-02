function createLogo(text, textColor, shape) {
    const renderedShape = shape.render();
    const renderedText = createText(text, textColor);
  
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${renderedShape}${renderedText}</svg>`;
  }
  
  function createText(text, textColor) {
    return `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="50px" fill="${textColor}">${text}</text>`;
  }
  
  module.exports = createLogo;
  