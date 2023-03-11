import  {shallow} from 'enzyme'
import Input from './input';
import { findByTestAttr , checkProps} from '../test/testUtils';


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