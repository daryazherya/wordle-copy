export function checkWord(word, rightWord) {
    const numbersRightLetters = {};
    const colors = [];

    for (let i = 0; i < rightWord.length; i++) {
        numbersRightLetters[rightWord[i]] ??= 0;
        numbersRightLetters[rightWord[i]] += 1;
    }

    for (let i = 0; i < word.length; i++) {
        if (word[i] === rightWord[i]) {
            colors[i] = "green";
            numbersRightLetters[word[i]] -= 1;
        }
    }

    for (let i = 0; i < word.length; i++) {
        if (word[i] === rightWord[i]) {
            continue;
        }

        if (rightWord.includes(word[i]) && numbersRightLetters[word[i]] > 0) {
            colors[i] = "yellow";
            numbersRightLetters[word[i]] -= 1;
        } else {
            colors[i] = "grey";
        }
    }

    return colors;
}
