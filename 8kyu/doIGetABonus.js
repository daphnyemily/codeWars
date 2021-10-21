//https://www.codewars.com/kata/56f6ad906b88de513f000d96/solutions/javascript

function bonusTime(salary, bonus) {
    let total = salary
    
    if (bonus === true){
      return  "\u00A3" + String(total*10)  
      
    }else{
      return "\u00A3" + String(total)
    }
  }
  