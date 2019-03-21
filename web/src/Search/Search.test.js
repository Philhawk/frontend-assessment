import React from "react";
import { shallow } from "enzyme";
import Search from './Search';

it('Search Component snapshot test', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toMatchSnapshot();
  });