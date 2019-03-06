import React from "react";
import { shallow } from "enzyme";

import { App } from "../../client/components/App";

jest.mock("date-fns");

test("Title renders on App", () => {
  const wrapper = shallow(<App auth={{ isAuthenticated: true }} />);
  const actual = wrapper.find("hi").text();

  expect(actual).toEqual(expected);
});
escape;
