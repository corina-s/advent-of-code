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
    const rows = entries.map(parseEntry)
    const requiredFields = [
        'byr',
        'iyr',
        'eyr',
        'hgt',
        'hcl',
        'ecl',
        'pid'
    ]
    let numValid = 0
    for (let row of rows){
        const isValid = requiredFields.every(field => field in row)
        if (isValid) numValid++
    }
    return numValid
    
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