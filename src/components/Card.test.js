// import { shallow, mount, render } from 'enzyme';
import React from "react";
import Card from './Card';

import renderer from "react-test-renderer";
 
it("expect to render Card component", () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toMatchSnapshot();
});

// console.log(shallow(<Card/>))
// it('expect to render Card component', () => {
//     // expect(shallow(<Card/>).length).toEqual(1)
//     expect(shallow(<Card/>)).toMatchSnapshot();
// })