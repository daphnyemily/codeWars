//https://www.codewars.com/kata/570597e258b58f6edc00230d/solutions/javascript


      function array(arr){
        let words = arr.split(',')
        
        if(words.length < 3)
          return null
        
        words.shift()
        words.pop()
        
        return words.join(' ')
      }
      
    
    // string -> always. empty? sometimes. no funny business. 
    // string -> separated by spaces -> removing commas
    //          -> remove first and last elements
    //   "1,2,3"      =>  "2"
    //   ""     =>  NULL
    // "1,2,3,4,5"  =>  "2 3 4"
    //   check for length of the string -> <=2 return null
    //   convert into array -> split(',') -> remove the commas ['1' , '2' , '3']
    //   array.slice(0 , array.length-1)
    //   shift and pop -> return array.shift() -> first value.
  
    //   join into a string join(' ')
 
    //BEST SOLUTION
    // function array(arr){
    //     return arr.split(",").slice(1,-1).join(" ") || null;
    //   }
      