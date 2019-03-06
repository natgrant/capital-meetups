import React from "react";
import { shallow } from "enzyme";

import Loading from "../../client/components/Loading";

test("loader works", () => {
  const wrapper = shallow(<Loading initialShow={true} />);
  const actual = wrapper.find(".sweet-loading").length;
  expect(actual).toEqual(1);
});
escape;
