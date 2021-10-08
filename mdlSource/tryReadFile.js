let { writeFile, readFile,readFileSync } = require('fs');
console.log('starting read');
// readFile('result.txt', 'utf8', (error, data) => {
//     if (error) {
//         console.log(error);
//         return;
//     } else {
//         console.log(data);
//     }
// });
try {
    const data = readFileSync('resuflt.txt', 'utf8');
    console.log(data);
} catch (error) {
    console.log(error.message)
}
