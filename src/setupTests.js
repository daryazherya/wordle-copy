// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

import '@testing-library/jest-dom';
import { createColorfulKeyboard } from "./createColorfulKeyboard";
import { checkWord } from "./checkWord";

test("check colors for keyboard", () => {
    const rightWord = "PEACE";
    const words = ["SPORT", "SPEED", "EAGLE", "AWARD", "SALAD"];

    const expectedObj = {
        S: "grey",
        P: "yellow",
        O: "grey",
        R: "grey",
        T: "grey",
        E: "green",
        D: "grey",
        A: "yellow",
        W: "grey",
        L: "grey",
        G: "grey",
    };

    const actualResult = createColorfulKeyboard(rightWord, words);
    // console.log(expectedObj, actualResult);
    expect(actualResult).toEqual(expectedObj);
});

test("check colors for keyboard 2", () => {
    const rightWord = "ABCDE";
    const words = ["ABCDX", "XXXAE"];

    const actualResult = createColorfulKeyboard(rightWord, words);
    expect(actualResult).toEqual({
        A: "green",
        B: "green",
        C: "green",
        D: "green",
        E: "green",
        X: "grey",
    });
});


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