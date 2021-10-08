
//we offload the app when start readin the file because it asynchro 
let { writeFile, readFile,readFileSync } = require('fs');
console.log('starting read');
readFile('result.txt', 'utf8', (error, data) => {
    if (error) {
        console.log(error);
        return;
    } else {
        console.log(data);
    }
});


console.log('finish read');

