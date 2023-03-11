import  {shallow} from 'enzyme'
import Input from './input';

import { findByTestAttr , checkProps} from '../test/testUtils';


const setup = () =>{
    return shallow(<Input />);
} 


test('renders without error', ()=>{
   const wrapper = setup();
   const component = findByTestAttr(wrapper, 'input-component' )
   expect(component.length).toBe(1)
  
  })