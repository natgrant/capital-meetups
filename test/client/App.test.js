import React from "react";
import { shallow } from "enzyme";

import { App } from "../../client/components/App";

test("Title renders on App", () => {
  const expected = "";

  const wrapper = shallow(<App auth={{ isAuthenticated: false }} />);
  const actual = wrapper.find("h1").text();

  expect(actual).toEqual(expected);
});
escape;
