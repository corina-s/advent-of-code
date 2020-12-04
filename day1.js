const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const passwords = fs.readFile('./data2.txt', 'utf8', (err, data)=>{
    if(err) {
        console.log('error reading the file');
        console.log(err);
      }
      let pw = data.split('\n').join(' ');


    fs.writeFile('./passwords.txt', pw, 'utf8', (err) => {
        if(err) {
          console.log(err);
        } else {
          console.log('write successful');
        }
      })
})
// const data = fs.readFile('./data.txt', 'utf8', (err, data)=>{
//     if(err) {
//         console.log('error reading the file');
//         console.log(err);
//       }
//     let numbers = data.split('\n').join(' ');
//     fs.writeFile('./numbers.txt', numbers, 'utf8', (err) => {
//         if(err) {
//           console.log(err);
//         } else {
//           console.log('write successful');
//         }
//       })
// })