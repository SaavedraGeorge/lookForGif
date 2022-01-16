import React from 'react';
import {AddCategory} from '../../components/Addcategory';
import {shallow} from 'enzyme'

describe('Pruebas en AddCategory', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);
    
    beforeEach(()=>{
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })
    
    test('should change the input ', () => {
        const input = wrapper.find('input');
        const value = 'hola mundo';
        input.simulate('change', {target:{value}});

        expect(wrapper.find('p').text().trim()).toBe(value);

        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).toHaveBeenCalled();
        expect(input.prop('value')).toBe('');


    })
        
})
