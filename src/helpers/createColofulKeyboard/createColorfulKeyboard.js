import { checkWord } from "../checkWord/checkWord";

export function createColorfulKeyboard(rightWord, words) {
    //const words = ["ABCDX", "XXXAE"];
    const colorsForKeyboard = {};

    for (let i = 0; i < words.length; i++) {
        const colors = checkWord(words[i], rightWord);
        // console.log(colors,'colors')
        for (let j = 0; j < words[i].length; j++) {
            colorsForKeyboard[words[i][j]] ??= "grey";
            if (
                colorsForKeyboard[words[i][j]] === "green" &&
                colors[j] === "yellow"
            ) {
                continue;
            }

            if (colors[j] !== "grey") {
                colorsForKeyboard[words[i][j]] = colors[j];
            }
        }
    }
    // console.log(colorsForKeyboard,'colorsKeyboard')
    return colorsForKeyboard;
}
