const createLogo = require('./create-logo');
const { Circle } = require('./shapes');

test('it works', () => {
  const shape = new Circle();
  shape.setColor('green');

  const result = createLogo('abc', 'red', shape);

  expect(result).toBe(
    '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">' +
      '<circle cx="50%" cy="50%" r="100" fill="green" />' +
      '<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="50px" fill="red">abc</text>' +
      '</svg>'
  );
});
