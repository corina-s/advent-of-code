const {passwords} = require('./passwords')

const arr = passwords.split(' ')

const isValid = (min, max, letter, pw) => {
    // console.log("valid", min, max, letter, pw)
    let num = pw.split(letter).length - 1
    console.log(num)
    console.log(min<=num && max>=num)
    return (min<=num && max>=num)
}

const grabData = (one, two, three) =>{
    // console.log("grab", one, two, three)
    let deets = {}
    let rule = one.split('-').map(n => Number(n))
    let [min, max] = rule
    deets.min = min
    deets.max = max
    deets.letter = two[0]
    deets.pw = three
    console.log("deets", deets)
    return deets 
}

function checkPw(passwords){
    let result = []
    for(let i = 0; i < passwords.length-3; i+=3){
        // console.log(passwords[i], passwords[i+1], passwords[i+2])
        let {min, max, letter, pw} = grabData(passwords[i], passwords[i+1], passwords[i+2])

        if (isValid(min, max, letter, pw)){
            result.push(pw)
        }
        
    }
    return result.length
}


// let test = "pmljtsttp"
// console.log(isValid(1, 3, "p", test))
// let test2 = "pmljtsttppp"
// console.log(isValid(1, 3, "p", test2))

console.log(checkPw(arr))