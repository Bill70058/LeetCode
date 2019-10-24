/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
    let A = 0,
        B = 0;
    secret = secret.split('');
    guess = guess.split('');
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            A++;
            secret[i] = '-1';
        }
    }

    for (let i = 0; i < secret.length; i++) {
        if (secret[i] !== guess[i] && secret.includes(guess[i])) {
            B++;
            secret[secret.indexOf(guess[i])] = '-1';

        }
    }
    return changeToString(A,B);
};

function changeToString(numA,numB) {
    return numA + 'A' + numB + 'B';
}

module.exports = getHint;