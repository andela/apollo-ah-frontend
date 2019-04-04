/* eslint-disable react/require-extension */
const assert = require ('assert');

function add (a, b) {  
  return a + b;  
}  
const expected = add(1,2);  
assert( expected === 3, 'one plus two is three'); 