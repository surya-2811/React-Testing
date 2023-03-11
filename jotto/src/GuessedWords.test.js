import React from "react";
import { shallow } from 'Enzyme';
import { findByTestAttr , checkProps} from '../test/testUtils';
import GuessedWords from "./GuessedWords";

const defaultProps ={
    guessedWords: [{guessedWord: 'train', letterMatchCount: 3}]
}

const setup =(props={})=>{
    const setupProps = {...defaultProps, ...props};
    return shallow(<GuessedWords {...setupProps}/>)
}

test('does not tthrow warning with expected props', ()=>{
    checkProps(GuessedWords, defaultProps)
});

// describe is a way of grouping test

describe('if there are no words guessed', ()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = setup({guessedWords: []})

    })

    test('renders without error', ()=>{
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1)

    })
    test('renders instructon to guess word', ()=>{
        const instructions = findByTestAttr(wrapper, 'guess-instructions') ;
        expect(instructions.text().length).not.toBe(0)       
    })

})
describe('if there are words guessed', ()=>{
    
})