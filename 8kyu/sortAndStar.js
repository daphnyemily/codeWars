//https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/solutions/javascript

function twoSort(s) {
   
    return s.sort().shift().split('').join('***')
   
 }
 
 //sort abc order - .sort
 //return only first value - .shift
 // seperate each letter .split
 //return value with '***' between each letter - . toSting & .join('***')