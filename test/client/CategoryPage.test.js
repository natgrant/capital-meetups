import React from "react";
import { shallow } from "enzyme";

import { CategoryPage } from "../../client/components/CatergoryPage";

test("should map through component", () => {
  const expected = "mapStateToProps";

  const wrapper = shallow(<CategoryPage />);
  console.log(wrapper.debug());
  // const actual = wrapper.find("Category").text();

  expect(actual).toHaveReturnedWith(expected);
});
escape;
