function palindrome(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true
}


console.log(palindrome('LEVEL')); // TRUE
console.log(palindrome('KATAK')); // TRUE
console.log(palindrome('MALAM')); // TRUE
console.log(palindrome('MALAK')); // FALSE