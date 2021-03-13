import React from "react";
import { mount, configure } from "enzyme";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("the App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it("should render without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
