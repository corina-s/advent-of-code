const {numbers} = require('./numbers')
const data = numbers.split(' ').map(el => {return Number(el)})
console.log(data)


function twoSum(nums, target){
    for(let i = 0; i < nums.length; i++){
        let n = nums[i]
        for(let j = i+1; j < nums.length; j++){
            let m = nums[j]
            if (n + m === 2020){
                return n*m
            }
        }
    }
}

// BigO = O(n)
// function twoSum(nums, target){
//     const set = new Set();
//     for(let number of nums){
//         const diff = 2020 - number;
//         if (set.has(diff)){
//             return number * diff
//         }
//         set.add(number);
//     }

// }

function threeSum(nums, target){
    for(let i = 0; i < nums.length; i++){
        let n = nums[i]
        for (let a = i+1; a < nums.length; a++){
            let k = nums[a]
            for(let j = a+1; j < nums.length; j++){
                let m = nums[j]
                if (n + m + k === 2020){
                    return n*m*k
                }
            }

        }
    }
}


// console.log(twoSum(data, 2020))
console.log(threeSum(data, 2020))