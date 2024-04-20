import Letters from "./Letters";
import EmptyWord from "./EmptyWord";


const Words = ({rightWord, numberEmpty, state}) => {
   
    
    return <div className="words-style">
        {state.words.map((word, i) => <Letters word={word} rightWord={rightWord} key={i}/>)}
        {numberEmpty > 0 && <EmptyWord inputWord={state.inputWord}/>}
        {numberEmpty > 0 && Array(numberEmpty - 1).fill().map((_) => <EmptyWord />)}
    </div>
}
 
export default Words;


