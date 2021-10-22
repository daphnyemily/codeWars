//https://www.codewars.com/kata/563b74ddd19a3ad462000054/solutions/javascript

function stringy(size) {
    let str = ''
  
    for (let i = 1; i <= size ; i++){
    str = str + i%2
      
   }return str
  }