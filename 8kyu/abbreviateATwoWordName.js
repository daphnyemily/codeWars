//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/solutions/javascript

function abbrevName(name){
    let firstLast = name.split(" ")
    console.log(firstLast)
    
    let inicial = (firstLast[0].charAt(0) + "." + firstLast[1].charAt(0)).toUpperCase()
    console.log(inicial)
   
    return inicial
  
  
  }
  //convert name to inicials - 2 words with space 
  //.split sperates each word into own strings
  //.charAt returns specific char
  // seperate letters with "."
  //concat
  //letters allwats capital  .toUppercase