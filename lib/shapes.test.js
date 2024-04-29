const shapes = require('./shapes');

test('circle works', () => {
  const circle = new shapes.Circle();
  circle.setColor('red');

  expect(circle.render()).toBe(
    '<circle cx="50%" cy="50%" r="100" fill="red" />'
  );
});

test('square works', () => {
  const square = new shapes.Square();
  square.setColor('blue');

  expect(square.render()).toBe(
    '<rect width="200" height="200" fill="blue" x="50" />'
  );
});

test('triangle works', () => {
  const triangle = new shapes.Triangle();
  triangle.setColor('green');

  expect(triangle.render()).toBe(
    '<polygon points="0 200, 150 0, 300 200" fill="green" />'
  );
});