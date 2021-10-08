
let { writeFileSync, readFile } = require('fs');
//ceate a file 
writeFileSync('result.txt', 'The content of the  file ', { flag: 'a' });
readFile('result.txt', 'utf8', (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});
