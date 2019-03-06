import React from "react";
import { shallow } from "enzyme";

import { CategoryPage } from "../../client/components/CategoryPage";

test("should map through component", () => {
  const expected = "mapStateToProps";

  const wrapper = shallow(<CategoryPage = {{}} />);
  const actual = wrapper.find("Category").text();

  expect(actual).toEqual(expected);
});
escape;
