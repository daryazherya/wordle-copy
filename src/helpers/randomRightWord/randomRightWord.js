export function randomRightWord() {
    const words = [
        "HELLO",
        "WORLD",
        "APPLE",
        "MUSIC",
        "TIGER",
        "LEMON",
        "SMILE",
        "BEACH",
        "LIGHT",
        "CHAIR",
        "GRACE",
        "SUNNY",
        "CLOUD",
        "HAPPY",
        "COLOR",
        "PEACE",
        "SNOWY",
        "GREEN",
        "OCEAN",
        "POWER",
    ];
    const number =  Math.floor(Math.random() * words.length);
    return words[number]
}