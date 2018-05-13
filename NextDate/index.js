let nextDate = require('./nextDate');
console.log('Enter 3 integer [year/month/day]: ');

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line',input=>{
    rl.close();
    i = input.split('/');
    a = i[0];
    b = i[1];
    c = i[2];
    console.log(nextDate(a,b,c));
})

