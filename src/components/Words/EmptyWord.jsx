
const EmptyWord = ({inputWord}) => {
    
    const emptyWord = inputWord ? inputWord.padEnd(5,' ').split('') : [' ',' ',' ',' ',' '];
    
    return <div className="wrapper-empty">
        {emptyWord.map((string, i) => {
            return <div className="letter" key={i}>{string.toUpperCase()}</div>
        })}
    </div>
}
 
export default EmptyWord;