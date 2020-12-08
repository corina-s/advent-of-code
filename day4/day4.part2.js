// validations:
// byr (Birth Year) - four digits; at least 1920 and at most 2002.
// iyr (Issue Year) - four digits; at least 2010 and at most 2020.
// eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
// hgt (Height) - a number followed by either cm or in:
// If cm, the number must be at least 150 and at most 193.
// If in, the number must be at least 59 and at most 76.
// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
// ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
// pid (Passport ID) - a nine-digit number, including leading zeroes.

const fs = require('fs').promises;


const readEntries = async () => {
    const data = await fs.readFile('./input', {encoding: 'utf-8'});
    return data.split('\n\n');

};

const solve = async () => {
    const entries = await readEntries();
    const rows = entries.map(parseEntry)
    
    
}
const validRange = (data, key, min, max) => {
    if (data[key]=== undefined) return false;
    const val = Number(data[key]);
    return min <= val && val <= max;
}

const validByr = (data)=>{
    return validRange(data, 'byr', 1920, 2002)
}
const validIyr = (data)=>{
    return validRange(data, 'iyr', 2010, 2020)
}
const validByr = (data)=>{
    return validRange(data, 'eyr', 2020, 2030)
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