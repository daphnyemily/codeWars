//https://www.codewars.com/kata/5390bac347d09b7da40006f6/solutions/javascript

String.prototype.toJadenCase = function () {
  
    let strArr = this.split(' ')
    let result = strArr.map(el =>{
      return el[0].toUpperCase() + el.slice(1)
    })
      return result.join(' ')
  };


  // worked with House Gardner