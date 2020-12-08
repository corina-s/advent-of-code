// count valid passports
// valid if all fields, ok if cid missing
// pass separeted by blank line

const fs = require('fs').promises;


const readLines = async () => {
    const data = await fs.readFile('./input', {encoding: 'utf-8'});
    return data.split('\n\n');

};

const solve = async () => {
    const lines = await readLines();
    
}

solve().then(console.log)