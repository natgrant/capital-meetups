import React from "react";
import { shallow } from "enzyme";

import Footer from "../../client/components/Footer";

test("Renders footer", () => {
  const wrapper = shallow(<Footer initialShow={true} />);
  const actual = wrapper.find("content has-text-centered").render;
  expect(actual).toBeDefined();
});
escape;
