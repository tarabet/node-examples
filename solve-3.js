/**
 * Created by Shuriken on 19.03.2016.
 */

var argv = require('yargs')
  .usage('Usage: node $0 --l=[num] --b=[num]')
  .demand(['l', 'b'])
  .argv;

var rect = require('./rectangle-2');

function solveRect(l, b) {
  console.log('Solving for rectangle with dimensions: ', l, 'and', b);
  rect(l, b, function(err, rectangle) {
    if(err) {
      console.log(err);
    } else {
      console.log('Calculating area for: ', l, b, rectangle.area());
      console.log('Calculating perimeter for: ', l, b, rectangle.perimeter());
    }
  })
}

solveRect(argv.l, argv.b);