/**
 * Created by oleksandr.taranenko on 3/14/2016.
 */

var rect = require('./rectangle-1');

function solveRect(l, b) {
    console.log('Perimeter is: ', rect.perimeter(l,b));
    console.log('Area is: ', rect.area(l,b));
}

solveRect(5,4);