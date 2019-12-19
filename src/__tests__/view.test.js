import React from "react";
import { shallow, mount, render } from "enzyme";
import View from "../view";
import shortTest from "../view/lib/style/short-static";

it("renders without el property", () => {
  const wrapper = mount(<View />);
  expect(wrapper.find("div")).not.toBeEmptyRender();
});

it("exist some element passed on property el", () => {
  const wrapper = mount(
    <View el="article">
      <View el="h1"></View>
    </View>
  );
  expect(wrapper.find("h1")).toExist();
});

it("exist element by id/className", () => {
  const wrapper = mount(
    <View el="article">
      <View el="h1" id="titleId" className="title">
        Hello!
      </View>
      <View el="h2" id="titleId2" className="title2">
        Hello 2!
      </View>
    </View>
  );
  expect(wrapper).toContainMatchingElement("h1#titleId");
  expect(wrapper).toContainMatchingElement("h1.title");
  expect(wrapper).toContainMatchingElement("h2#titleId2");
  expect(wrapper).toContainMatchingElement("h2.title2");
});

it("should have prop", () => {
  const wrapper = mount(<View el="main" bg="red" />);
  expect(wrapper).toHaveProp("bg");
});

it("should be removed", () => {
  const wrapper = mount(<View el="VIEW_NULL">Hi</View>);
  expect(wrapper.find("View")).toBeEmptyRender();
});
