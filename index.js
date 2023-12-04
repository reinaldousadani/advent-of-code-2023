const fs = require('fs')

const fileDatas = fs.readFileSync('input.txt', 'utf-8')
const datas = fileDatas.split(/\r?\n/)

const numbers = datas.map(data => {
    const numericString = data.replace(/\D/gi, "")
    if(numericString.length === 1){
        return parseInt(`${numericString}${numericString}`)
    } else if(numericString.length > 2){
        return parseInt(`${numericString[0]}${numericString[numericString.length - 1]}`)
    } else {
        return parseInt(numericString)
    }
})

console.log(numbers.reduce((a,b) => a+b))