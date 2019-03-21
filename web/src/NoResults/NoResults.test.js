import React from "react";
import { shallow } from "enzyme";
import NoResults from './NoResults';

describe('NoResults', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<NoResults />);
    const div = wrapper.find('.no-results-box');
    expect(div.length).toEqual(1);
  });
});