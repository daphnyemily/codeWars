//https://www.codewars.com/kata/5715eaedb436cf5606000381/solutions/javascript

function positiveSum(arr) {
    let sumNum = 0
    
    for(let i = 0; i < arr.length; i++){      
      if(arr[i]>0){
        sumNum += arr[i]
      }
    }
     return sumNum
   }