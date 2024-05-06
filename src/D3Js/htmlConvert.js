const htmlConvert = require('html-convert');
const fs = require('fs');

var convert = htmlConvert();

fs.createReadStream('simple-graph.html').pipe(convert()).pipe(fs.createWriteStream('out.png'));



