function censor(inStr){
    for(idx in censoredWords){
        inStr = inStr.replace(censoredWords[idx],"*******");
    }
    for(idx in customCensoredWords){
        inStr = inStr.replace(customCensoredWords[idx],"*******");
    }
    return inStr;
}
function addCensoredWord(word){
    customCensoredWords.push(word);
}
function getCensoredWords(){
    renturn censoredWords.concat(customCensoredWords);
}
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;