const fs = require('fs').promises;

const readLines = async () => {
    const data = await fs.readFile('./input', {encoding: 'utf-8'});
    return data.split('\n');

};

const solve = async () => {
    const lines = await readLines();
    // const lines = ["5-10 b: bhbjlkbbbbbbb", "3-4 j: hjvj", '8-9 p: pmljtsttp']
    let valid = 0
    for(let line of lines){
        const {pos1, pos2, char, password} = createObj(line);
        const is1 = password[pos1] ===char
        const is2 = password[pos2] ===char
        if((is1 && !is2) || (!is1 && is2)) {
            valid ++
        }
    }
    return valid
}
const createObj = (line) => {
    const [range, charSeg, password] = line.split(' ');
    const [pos1, pos2] = range.split('-').map(Number)
    const char = charSeg[0]
    return {
        pos1: pos1-1,
        pos2: pos2-1,
        char,
        password
    }
}

solve().then(console.log)