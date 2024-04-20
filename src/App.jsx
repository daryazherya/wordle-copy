import './styles/App.css';
import { useState } from 'react';
import Keyboard from './components/Keyboard/Keyboard';
import NavMenu from './components/Nav/Nav';
import Words from './components/Words/Words';
import { createColorfulKeyboard } from './helpers/createColofulKeyboard/createColorfulKeyboard';
import Modal from './components/Modal/Modal';
import { randomRightWord } from './helpers/randomRightWord/randomRightWord';


function Game({ rightWord, generateNewWord }) {
    const [state, setState] = useState({
        words: [],
        inputWord: '',
    })
    const [activeModal, setActiveModal] = useState(true);
    const numberEmpty = 6 - state.words.length;
    const win = state.words.includes(rightWord);
    const loser = state.words.length === 6 && !win;
    const keyboardLettersColors = createColorfulKeyboard(rightWord, state.words);


    const onEnter = () => {
        setState(prev => {
            console.log({prev});
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
                onClick={generateNewWord}
            />
            <Modal text={'К сожалению, ты не угадал слово.'}
                status={loser}
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                onClick={generateNewWord}
            />
            <div className='wrapper'>
                <Words
                    numberEmpty={numberEmpty}
                    rightWord={rightWord}
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

function App() {
    const [rightWord, setRightWord] = useState(randomRightWord());
    function generateNewWord () {
        setRightWord(randomRightWord());
    }
   
    return <Game key={rightWord} rightWord={rightWord} generateNewWord={generateNewWord} />
}

export default App;
