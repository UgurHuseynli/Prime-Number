function isPrimeNumber(num) {

    if (num <= 0) {
        return 'Prime Number can not equal to zero or negative number!'
    }
    else {
        let count = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i == 0) {
                count = count + 1
            }
        }

        if (count > 2) {
            return 'Not Prime'
        }
        else {
            return 'Prime'
        }
    }
}

console.log(isPrimeNumber(0))