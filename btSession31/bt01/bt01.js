var arr = "The quick brown fox jumped over the lazy dog";

function check(str){
    let word = str.split(" ");
    let countWord = [];
    for(let i=0; i<word.length; i++){
        let count = 0;
        let wordLength = word[i].length;
        for(let j=0; j<wordLength; j++){
            count++;
        }
        countWord.push(count);
    }
    let maxWord = countWord[0];
    for(let k=1; k<countWord.length; k++){
        if(countWord[k]>maxWord){
            maxWord = countWord[k];
        }
    }
    return maxWord;
}

console.log(check(arr));