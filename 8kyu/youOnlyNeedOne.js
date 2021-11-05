//https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript

function check(a, x) {
    
    if (a.includes(x)) {
      return true
    }else {
      return false
    }
  }
  
  
  //  take in array (a) and value (x) - Can the array be empty strings? Can the numbers be negative? Case sensitive?
  //  return true if the array contains the value, false if not.
  //  const cities = ['Chicago', 'Dallas', 'Philly'] = cities.includes('Philly') => true.
  // 
  /* 1. if/else conditional
  2. includes() method to see if the array includes the value
  */
  