class Shape {
    color;
  
    setColor(color) {
      this.color = color;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="50%" cy="50%" r="100" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect width="200" height="200" fill="${this.color}" x="50" />`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="0 200, 150 0, 300 200" fill="${this.color}" />`;
    }
  }
  
  module.exports = {
    Circle,
    Square,
    Triangle,
  };