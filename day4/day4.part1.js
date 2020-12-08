// count valid passports
// valid if all fields, ok if cid missing
// pass separeted by blank line

const fs = require('fs').promises;


const readEntries = async () => {
    const data = await fs.readFile('./input', {encoding: 'utf-8'});
    return data.split('\n\n');

};

const solve = async () => {
    const entries = await readEntries();
    console.log(parseEntry(entries[0]))
    
}

const parseEntry = (str) => {
    const parts = str.split(/\s/);
    const obj = {}

    for(let part of parts){
        const [k, v] = part.split(':');
        obj[k] = v;

    }
    return obj
}

solve().then(console.log)