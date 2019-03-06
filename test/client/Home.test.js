import React from "react";
import { shallow } from "enzyme";

import Home from "../../client/components/Home";

test("centered text", () => {
  const wrapper = shallow(<Home initialShow={true} />);
  const actual = wrapper.find("content has-text-centered").render;
  expect(actual).toBeDefined();
});
escape;

test("buttons appearing", () => {
  const wrapper = shallow(<Home initialShow={true} />);
  const actual = wrapper.find(
    "button is-rounded is-large is-warning is-outlined button-more"
  ).render;
  expect(actual).toBeDefined();
});
escape;

test("showing home fonts", () => {
  const wrapper = shallow(<Home initialShow={true} />);
  const actual = wrapper.find("subtitle-home is-size-3").render;
  expect(actual).toBeDefined();
});
escape;
