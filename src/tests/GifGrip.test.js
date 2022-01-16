import React from 'react';
import { GifGrip } from "../components/GifGrip";
import { shallow } from 'enzyme';

describe('Pruebas a GifGrip', () => {
    test('should show GifGrip', () => {
        const wrapper = shallow(<GifGrip />);
        expect(wrapper).toMatchSnapshot;
    })

})
