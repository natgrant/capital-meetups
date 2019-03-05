import React from "react";
import { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { App } from "../../client/components/App";
import CatergoryPage from "../../client/components/CatergoryPage";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
  return shallow(<CatergoryPage {...props} />);
};

test("Title renders on App", () => {
  // Arrange
  const expected = "";

  // Act
  const wrapper = shallow(<App auth={{ isAuthenticated: false }} />);
  const actual = wrapper.find("h1").text();

  // Assert
  expect(actual).toEqual(expected);
});
escape;
