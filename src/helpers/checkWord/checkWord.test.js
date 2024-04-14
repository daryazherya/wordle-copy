import { checkWord } from "./checkWord";

const rightWord = 'PEACE';


test('test for checkWord with SPORT', () => {

    const expectedResult = ['grey','yellow','grey','grey','grey'];
    const actualResult = checkWord('SPORT', rightWord);
    console.log(expectedResult, actualResult,'word1')
        
    expect(actualResult).toEqual(expectedResult);

})

test('test for checkWord with SPEED', () => {

    const expectedResult = ['grey','yellow','yellow','yellow','grey'];
    const actualResult = checkWord('SPEED', rightWord);
    console.log(expectedResult, actualResult)
        
    expect(actualResult).toEqual(expectedResult);

})

test('test for checkWord with EAGLE', () => {

    const expectedResult = ['yellow','yellow','grey','grey','green'];
    const actualResult = checkWord('EAGLE', rightWord);
    console.log(expectedResult, actualResult)
        
    expect(actualResult).toEqual(expectedResult);

})

test('test for checkWord with AWARD', () => {

    const expectedResult = ['grey','grey','green','grey','grey'];
    const actualResult = checkWord('AWARD', rightWord);
    console.log(expectedResult, actualResult)
        
    expect(actualResult).toEqual(expectedResult);

})

test('test for checkWord with SALAD', () => {

    const expectedResult = ['grey','yellow','grey','grey','grey'];
    const actualResult = checkWord('SALAD', rightWord);
    console.log(expectedResult, actualResult)
        
    expect(actualResult).toEqual(expectedResult);

})