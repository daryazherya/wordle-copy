import { checkWord } from "../../helpers/checkWord/checkWord";
import {  defineColorCell } from "../../helpers/defineColor/defineColor";


const Letters = ({word, rightWord}) => {
    const colors = checkWord(word, rightWord);

    return <div className="word-list">
        {word.split('').map((letter, i) => {
            return <div 
                        className='letter' 
                        key={i} 
                        style={{ backgroundColor: letter === ' '
                         ? 'white' : 
                         defineColorCell(colors, i)}
                        }
                    >
                        {letter.toUpperCase()}
            </div>
        })}
    </div>
}
 
export default Letters;