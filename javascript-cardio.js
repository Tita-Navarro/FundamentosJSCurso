const reverseString =(word)=>{
   // return word.split('').reverse().join('');
    // wordArr.reverse();
    // return wordArr.join('');
    
    //console.log(wordArr);
    /*---------------------------------------*/
    let revString = '';
    for(let i = word.length-1; i >= 0; i--){
        revString= revString+ word[i];
    }
    return revString;
}
const str = reverseString('hello');
console.log(str);
