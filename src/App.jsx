import './styles/App.css';
import { useState } from 'react';
import Keyboard from './components/Keyboard/Keyboard';
import NavMenu from './components/Nav/Nav';
import Words from './components/Words/Words';
import { createColorfulKeyboard } from './helpers/createColofulKeyboard/createColorfulKeyboard';
import Modal from './components/Modal/Modal';
import { randomRightWord } from './helpers/randomRightWord/randomRightWord';


function App() {

    const [state, setState] = useState({
        rightWord: randomRightWord(),
        words: [],
        inputWord: '',
    })
    const [activeModal, setActiveModal] = useState(true);
    const numberEmpty = 6 - state.words.length;
    const win = state.words.includes(state.rightWord);
    const loser = state.words.length === 6 && !win;
    const keyboardLettersColors = createColorfulKeyboard(state.rightWord, state.words);


    const onEnter = () => {
        setState(prev => {
            if (prev.inputWord.length === 5) {
                prev.words.push(prev.inputWord)
                return {
                    ...prev,
                    inputWord: ''
                }
            } else {
                return prev
            }
        })

    }

    const deleteLetter = () => {
        setState((prev) => {
            return { ...prev, inputWord: prev.inputWord.slice(0, prev.inputWord.length - 1) }
        })
    }

    const addLetter = (e) => {
        setState((prev) => prev.inputWord.length === 5 ? prev : { ...prev, inputWord: prev.inputWord + e })
    }

    return (
        <div >
            <NavMenu />
             <Modal text={'Круто! Сыграй еще раз!'}
                status={win}
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                setState={setState}
                randomRightWord={randomRightWord}
            />
            <Modal text={'К сожалению, ты не угадал слово.'}
                status={loser}
                activeModal={activeModal}
                setActiveModal={setActiveModal}
            />
            <div className='wrapper'>
                <Words
                    numberEmpty={numberEmpty}
                    state={state}
                />
            </div>
            <Keyboard
                keyboardLettersColors={keyboardLettersColors}
                onEnter={onEnter}
                addLetter={addLetter}
                deleteLetter={deleteLetter}
                state={state}
            />
        </div>
    )
}

export default App;
