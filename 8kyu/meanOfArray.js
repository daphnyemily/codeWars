//https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks){
    let total = 0
    
    for(let i=0; i < marks.length; i++){
      total += marks[i]
    }
    return Math.floor(total / marks.length)
  }