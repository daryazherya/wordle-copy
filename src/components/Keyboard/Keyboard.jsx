import { useEffect } from 'react';
import { alphabet } from '../../helpers/variables';

const Keyboard = ({ keyboardLettersColors, onEnter, addLetter, deleteLetter, state}) => {

    useEffect(() => {
        function handler(e) {
            if (e.key === 'Enter') {
                onEnter();
            } else if (e.key === 'Backspace') {
                deleteLetter();
            } else {
                addLetter(e.key.toUpperCase());
            }

        }

        window.addEventListener('keydown', handler)

        return () => {
            window.removeEventListener('keydown', handler)
        }
    }, [state, onEnter, addLetter, deleteLetter]);

    return (
        <div className="wrapper-keyboard">
            <div className='keyboard'>
                {alphabet.map((letter, i) => {
                    return <button
                        key={i}
                        style={{ backgroundColor: keyboardLettersColors[letter.toUpperCase()] }}
                        name={letter.toUpperCase()}
                        onClick={(e) => addLetter(e.target.name)}
                    >
                        {letter.toUpperCase()}
                    </button>
                })}
            <button 
                className='keyboard-button'
                onClick={onEnter}
            >
                Enter
            </button>
            <button
                className='keyboard-button'
                onClick={deleteLetter}
            >
                Delete
            </button>
            </div>
        </div>
    );
}

export default Keyboard;