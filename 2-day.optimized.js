const fs = require('fs').promises;

const readLines = async () => {
    const data = await fs.readFile('./input', {encoding: 'utf-8'});
    return data.split('\n');

};

const solve = async () => {
    const lines = await readLines();
    let num = 0
    for(let line of lines){
        const {min, max, char, password} = createObj(line)
        const count = charCount(char, password)
        if (min <= count && count <=max){
            num++
        }
    }
    return num
}

const createObj = (line) => {
    const [range, charSeg, password] = line.split(' ');
    const [min, max] = range.split('-').map(Number)
    const char = charSeg[0]
    return {
        min,
        max,
        char,
        password
    }
}

const charCount = (target, str)=> {
    let count = 0
    for(let char of str){
        if (char === target){
            count += 1
        }
    }
    return count
}

solve().then(console.log)
