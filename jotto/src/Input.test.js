import  {shallow} from 'enzyme'
import Input from './input';
import { findByTestAttr , checkProps} from '../test/testUtils';
import React from 'react'



const setup = (secretWord ="party") =>{
    return shallow(<Input  secretWord={secretWord}/>);
} 




test('renders without error', ()=>{
   const wrapper = setup();
   const component = findByTestAttr(wrapper, 'input-component' )
   expect(component.length).toBe(1)
  
  })
  test('does not throw warnings with expected props', ()=>{
    checkProps(Input, {secretWord: "party"})
   
   })

describe('state controlled input field', ()=>{
  test('state updates with value of input box upon change', ()=>{
     const mockSetCurrentGuess = jest.fn();
     React.useState = jest.fn(()=>["", mockSetCurrentGuess])
     const wrapper = setup();
     const inputBox = findByTestAttr(wrapper, 'input-box');
     const mockEvent = {target: {value: 'train'}};
     inputBox.simulate("change", mockEvent);
     expect(mockSetCurrentGuess).toHaveBeenLastCalledWith('train')
})
})