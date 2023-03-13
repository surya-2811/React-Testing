import React from 'react';
import {mount} from 'enzyme'

import App from './App';
import { findByTestAttr } from '../test/testUtils';



const setup =(state ={}) =>{
    const wrapper = mount(<App />)
    const inputBox = findByTestAttr(wrapper, 'input-box');
    inputBox.simulate('change', {target: {value: 'train'}})

    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', {preventdefault() {}})

    return wrapper;
}

describe.skip('no words guessed', ()=>{
    let wrapper
    beforeEach(()=>{
      wrapper = setup({
        secretWord: 'party',
        success: false,
        guessedWords: []
      })
    })
    test('creates guessedwords table with one row', ()=>{
        const guessedWordRows = findByTestAttr(wrapper, 'guessed-word')
        expect(guessedWordRows).toHaveLength(1)
    })

})
describe.skip('some words guessed', ()=>{
  let wrapper;
  beforeEach(()=>{
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWord : [{guessedWord: 'agile', letterMatchCount: 1}]
    })
  })
  test('add row to guessedWords table',()=>{
    const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordNodes).toHaveLength(2)
  })
    
})
describe.skip('guess secret word', ()=>{
    let wrapper;
    beforeEach(()=>{
      wrapper = setup({
        secretWord: 'party',
        success: false,
        guessedWords: [{guessedWord: 'agile', letterMatchCount: 1}]
      })
    const inputBox = findByTestAttr(wrapper, 'input-box');
    const mockEvent = {target: {value: 'party'}};
    inputBox.simulate('change', mockEvent);

    const simulateButton = findByTestAttr(wrapper, 'submit-button');
    submitbutton.simulate('click', {preventdefault(){}});
  });

  test('add row to guessedWord table', ()=>{
    const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordNodes).toHaveLength(3);

  });
  test('displays congrats component', ()=>{
    const congrats = findByTestAttr(wrapper, 'component-congrats');
    expect(congrats.text().length).toBeGreaterThan(0)
  });
  test('does not display input component contents', ()=>{
    const inputBox = findByTestAttr(wrapper, 'input-box');
    expect(inputBox.exists()).toBe(false);
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    expect(submitButton.exists()).toBe(false)
  })


})