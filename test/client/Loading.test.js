import React from "react";
import { shallow } from "enzyme";

import Loading from "../../client/components/Loading";

test("loader works", () => {
  console.log();
  const wrapper = shallow(<Loading initialShow={true} />);
  const actual = wrapper.render("loading").toHaveReturned();
  expect(actual).toMatchObject(expected);
});
escape;
