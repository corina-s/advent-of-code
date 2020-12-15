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
    
}

const binaryFind = (str) => {
    let lo = 0;
    let hi = 128;
    for (let char of str){
        const mid = Math.floor((lo + hi)/2);
        if (char === 'F'){
            // take the lower half
            hi = mid;
        }else if (char === 'B'){
            // take the upper half
            lo = mid;
        }
        
    }
    return lo;
}

console.log(binaryFind('FBFBBFF')) //44
// solve().then(console.log)

