while (true) {
    const number1 = Math.floor(Math.random() * 9) + 1; // 1부터 9까지 랜덤한 숫자
    const number2 = Math.floor(Math.random() * 9) + 1; 
    const result = number1 * number2;
    let condition = true
    while (condition) {
        const answer = prompt(String(number1) + 'x' + String(number2) + '는?')
        if (result === Number(answer)) {
            alert('딩동댕! 정답입니다.');
            condition = false;
        } else {
            alert('땡! 틀렸습니다')
        }
    }
}

