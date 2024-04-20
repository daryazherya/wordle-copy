import { useEffect } from "react";
import {
    alphabet,
    firstRow,
    secondRow,
    thirdRow,
} from "../../helpers/variables";
import KeyboardRow from "../KeyboardRow/KeyboardRow";

const Keyboard = ({
    keyboardLettersColors,
    onEnter,
    addLetter,
    deleteLetter,
    state,
}) => {
    useEffect(() => {
        function handler(e) {
            if (e.key === "Enter") {
                onEnter();
            } else if (e.key === "Backspace") {
                deleteLetter();
            } else if (alphabet.includes(e.key)) {
                addLetter(e.key.toUpperCase());
            }
        }

        window.addEventListener("keydown", handler);

        return () => {
            window.removeEventListener("keydown", handler);
        };
    }, []);

    return (
        <div className="wrapper-keyboard">
            <div className="keyboard">
                <div className="wrapper-keyboard-button">
                    <KeyboardRow
                        row={firstRow}
                        addLetter={addLetter}
                        keyboardLettersColors={keyboardLettersColors}
                    />
                </div>
                <div className="wrapper-keyboard-button">
                    <KeyboardRow
                        row={secondRow}
                        addLetter={addLetter}
                        keyboardLettersColors={keyboardLettersColors}
                    />
                </div>
                <div className="wrapper-keyboard-button">
                    <button className="keyboard-button" onClick={onEnter}>
                        Enter
                    </button>
                    <KeyboardRow
                        row={thirdRow}
                        addLetter={addLetter}
                        keyboardLettersColors={keyboardLettersColors}
                    />
                    <button className="keyboard-button" onClick={deleteLetter}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Keyboard;
