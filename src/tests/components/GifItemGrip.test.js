import React from 'react';
import {shallow} from 'enzyme';

import {GifItemGrip} from '../../components/GifItemGrip';

describe('componente gif grip', () => {
    const title = 'titulo'
    const url = 'http://www.google.cl'
    const wrapper = shallow(<GifItemGrip url ={url} title={title}/>);

    test('mostrar <GifItemGrip /> ', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('should look class in the divs', () => {
        const div = wrapper.find('div');
        const nameClass = div.prop('className');
        const clases = 'card animate__animated animate__fadeIn'

        expect(nameClass).toBe(clases);
        expect(nameClass.includes('animate__fadeIn')).toBe(true);
    })
    
    
})
