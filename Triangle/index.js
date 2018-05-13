console.log('Enter 3 integer for triangle: ');

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line',input=>{
    rl.close();
    i = input.split(' ');
    a = i[0];
    b = i[1];
    c = i[2];
    var tri = require('./tri');
    console.log(tri(a,b,c));
})
