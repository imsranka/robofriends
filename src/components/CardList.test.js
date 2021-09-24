// import { shallow, mount, render } from 'enzyme';
import React from "react";
import CardList from './CardList';

import renderer from "react-test-renderer";
 
it("expect to render CardList component", () => {
    const mockRobots = [{
        id:8, 
        username:'yo', 
        name:'lo', 
        email:'ho'
    }]
    const tree = renderer.create(<CardList robots={mockRobots}/>).toJSON();
    expect(tree).toMatchSnapshot();
});
