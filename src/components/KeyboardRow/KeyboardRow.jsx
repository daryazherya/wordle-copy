const KeyboardRow = ({row, addLetter, keyboardLettersColors}) => {
    return row.map((letter, i) => {
        return <button
            key={i}
            style={{ backgroundColor: keyboardLettersColors[letter.toUpperCase()]}}
            name={letter.toUpperCase()}
            onClick={(e) => addLetter(e.target.name)}
        >
            {letter.toUpperCase()}
        </button>
    })
}
 
export default KeyboardRow;