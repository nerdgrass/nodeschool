var fs = require('fs');
var path = process.argv[2];

var buffer = fs.readFileSync(path);
var bufferStr = buffer.toString();
var bufferArr = bufferStr.split('\n');

console.log(bufferArr.length - 1);
