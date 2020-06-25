//끝말잇기

let word = '단어';
document.write(word);
while (true) {
    const newWord = prompt('다음 단어를 입력하세요')
    if (newWord[0] === word[word.length - 1]) {
        word = newWord
        document.write('-' + word)
    } else {
        alert('틀렸습니다!')
    }
}
