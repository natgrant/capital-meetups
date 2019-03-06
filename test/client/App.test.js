import React from "react";
import { shallow } from "enzyme";

import Footer from "../../client/components/Footer";
import Loading from "../../client/components/Loading";
// import { App } from "../../client/components/App";

jest.mock("date-fns");

// test("Title renders on App", () => {
//   const wrapper = shallow(<App auth={{ isAuthenticated: true }} />);
//   const actual = wrapper.find("hi").text();

//   expect(actual).toEqual(expected);
// });
escape;

test("loader works", () => {
  const wrapper = shallow(<Loading initialShow={true} />);
  const actual = wrapper.find(".sweet-loading").length;
  expect(actual).toEqual(1);
});
escape;

test("Renders footer", () => {
  const wrapper = shallow(<Footer initialShow={true} />);
  const actual = wrapper.find("content has-text-centered").render;
  expect(actual).toBeDefined();
});
escape;

import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

enzyme.configure({
  adapter: new Adapter()
});
