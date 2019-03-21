import React from "react";
import { shallow } from "enzyme";
import Navbar from './Navbar';

describe('Navbar', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Navbar />);
    const div = wrapper.find('.small-nav');
    expect(div.length).toEqual(1);
  });
});