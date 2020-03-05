function kelipatan() {
    let result = ''
    for (let i = 0; i <= 100; i++) {
        if (i % 25 === 0 && i !== 0) {
            result +='KI' + '\n'
        }
        else if (i % 40 === 0 && i !== 0) {
            result +='OS' + '\n'
        }
        else if (i % 60 === 0 && i !== 0) {
            result +='TIK' + '\n'
        }
        else if (i % 99 === 0 && i !== 0) {
            result +='KIOSTIX' + '\n'
        }    }
    return result
}

console.log(kelipatan())