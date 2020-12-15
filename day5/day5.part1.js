const fs = require('fs').promises;
// 128 rows: lo = 0 (inclusive) hi = 128 (exclusive) mid = 64(replaces hi as top)
// 8 columns: 0 - 7
// seat id row*8 + col
const readLines = async () => {
    const data = await fs.readFile('./input', {encoding: 'utf-8'});
    return data.split('\n');

};

const solve = async () => {
    const lines = await readLines();
    const seatIds = lines.map(line => {
        const rowStr = line.slice(0,7);
        const colStr = line.slice(7);
        const rowNum = binaryFind(rowStr, 'F', 'B', 128)
        const colNum = binaryFind(colStr, 'L', 'R', 8);
        return (8*rowNum)+colNum;
    
    })
}

const binaryFind = (str, bottomSym, topSym, n) => {
    let lo = 0;
    let hi = n;
    for (let char of str){
        const mid = Math.floor((lo + hi)/2);
        if (char === bottomSym){
            // take the lower half
            hi = mid;
        }else if (char === topSym){
            // take the upper half
            lo = mid;
        }
        
    }
    return lo;
}

// console.log(binaryFind('FBFBBFF', 'F', 'B', 128)) //44
// console.log(binaryFind('RLR', 'L', 'R', 8)) //5
solve().then(console.log)

