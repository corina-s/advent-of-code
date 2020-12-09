const fs = require('fs').promises;

// , is an open space
// # is a tree
// input is repeated horizontally
// goal start top left corner and hit the bottom with a rule for movement right 3 down 1
// count nb of trees we hit

// how to copy horizontally the forest
//  how many columns do I need to traverse to reach bottom
//  how to get an infinite version? => modulo? to stay within bounds
// 


const readLines = async () => {
    const data = await fs.readFile('./input', {encoding: 'utf-8'});
    return data.split('\n');

};

const solve = async () => {
    const lines = await readLines();
    
}

solve().then(console.log)

