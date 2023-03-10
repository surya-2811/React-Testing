import  {shallow} from 'enzyme'
import Input from './input';
import { findByTestAttr , checkProps} from '../test/testUtils';
import React from 'react'

// const mockSetCurrentGuess = jest.fn();

// jest.mock('react', ()=>({
//   ...jest.requireActual('react'),
//   useState: (initialState) => [initialState, mockSetCurrentGuess]
// })) 


const setup = (success= false, secretWord ="party") =>{
    return shallow(<Input success={success} secretWord={secretWord}/>);
} 

describe('render', ()=>{
  describe('success is true', ()=>{
    let wrapper;
    beforeEach(()=>{
       wrapper = setup(true);

    })
    test('renders without error', ()=>{
      const component = findByTestAttr(wrapper, 'input-component' )
      expect(component.length).toBe(1)
     
     })
    test('input box does not show', ()=>{
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(false)
    })
    test('submit button does not show', ()=>{
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      expect(submitButton.exists()).toBe(false)
    })
  })
  describe('success is false', ()=>{
    let wrapper;
    beforeEach(()=>{
       wrapper = setup(false);

    })
    test('renders without error', ()=>{
      const component = findByTestAttr(wrapper, 'input-component' )
      expect(component.length).toBe(1)
     
     })
    test('input box  show', ()=>{
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(true)
    })
    test('submit button  show', ()=>{
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      expect(submitButton.exists()).toBe(true)
    })
  })
})




  test('does not throw warnings with expected props', ()=>{
    checkProps(Input, {secretWord: "party"})
   
   })

describe('state controlled input field', ()=>{
  let mockSetCurrentGuess =jest.fn();
  let wrapper;
  let originalUseState;
  beforeEach(()=>{
     mockSetCurrentGuess.mockClear();
     originalUseState = React.useState;
    React.useState = ()=> ["", mockSetCurrentGuess]
     wrapper = setup();

  })
  afterEach(()=>{
    React.useState= originalUseState;
  })
  test('state updates with value of input box upon change', ()=>{
   
     const inputBox = findByTestAttr(wrapper, 'input-box');
     const mockEvent = {target: {value: 'train'}};
     inputBox.simulate("change", mockEvent);
     expect(mockSetCurrentGuess).toHaveBeenLastCalledWith('train')
})
  test('field is cleared upon submit button click', ()=>{
   
    const submitbutton = findByTestAttr(wrapper, 'submit-button');
    submitbutton.simulate('click', {preventDefault() {}});
    expect(mockSetCurrentGuess).toHaveBeenLastCalledWith("");

  })
})