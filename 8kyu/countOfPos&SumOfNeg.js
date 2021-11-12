//https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

function countPositivesSumNegatives(input) {
    if(input === null || input.length === 0){
      return []
    }else {
      let reducer = (a,b) => {
        return a+b
      }
       let lessThan= input.filter(a => a <0)
       let greaterThan = input.filter(a => a>0)
       return [greaterThan.length, lessThan.reduce(reducer, 0)]
    }}