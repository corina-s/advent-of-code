const fs = require('fs').promises;



const readLines = async () => {
    const data = await fs.readFile('./input', {encoding: 'utf-8'});
    return data.split('\n');

};

const solve = async () => {

    const lines = await readLines();
    const slopes = [
        [1,1],
        [3,1],
        [5,1],
        [7,1],
        [1,2],

    ]
    let result = 1
    for(let slope of slopes){
        const [right, down]= slope;
        result *= count(lines,right, down)
    }
        
    return result
}

const count = (lines, right, down)=> {
    
    let width = lines[0].length
    let num = 0
    let ci = 0;
    for (let ri = 0; ri < lines.length; ri+=down){
        if (lines[ri][ci % width]==='#'){
            num++
        }
        ci +=right
    }
    return num
}

solve().then(console.log)