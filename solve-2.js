
var rect = require('./rectangle-2');

function solveRect(l, b) {
  console.log('Solving for rectangle: ', 'L = ', l, ' B = ', b);
  rect(l, b, function(err, rectangle) {
    if (err) {
      console.log(err);
    } else {
      console.log('Solving the area for dimensions: ', l, b, rectangle.area());
      console.log('Solving the perimeter for dimensions: ', l, b, rectangle.perimeter());
    }
  })
}

solveRect(5, 5);
solveRect(-4, 10);
solveRect(10, 32);
