const truncateString = require('./index');

console.log(truncateString('This is a long string that needs to be truncated', 20,'***')); // Output: 'This is a long str...'
console.log(truncateString('Short string', 20)); // Output: 'Short string'
