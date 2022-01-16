import React from 'react';
import { shallow } from 'enzyme';
import { GifGrip } from '../../components/GifGrip'

describe('Pruebas en AddCategory', () => {

    const category = 'los simpson';

    test('should show <GifGrip /> whith 0 defoult', () => {
        const wrapper = shallow(<GifGrip category={ category } />);
        expect(wrapper).toMatchSnapshot()
    });


})