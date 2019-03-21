import React from "react";
import { shallow } from "enzyme";
import Body from './Body';

describe('Body', () => {
  it('should render the section with search correctly', () => {
    const wrapper = shallow(<Body />);
    const div = wrapper.find('.section-2-with-search');
    expect(div.length).toEqual(1);
  });
  it('should render the section without search correctly', () => {
    const wrapper = shallow(<Body />);
    const div = wrapper.find('.section-2-without-search');
    expect(div.length).toEqual(1);
  });
});