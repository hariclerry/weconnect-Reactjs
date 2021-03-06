import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import jwt from "jsonwebtoken";
import weconnectStore from "store";
import Login from "containers/user/login";

const loginUserMock = {
  access_token: jwt.sign(
    { email: "clerry@gmail.com", password: "this199" },
    "hard to guess string"
  )
};

describe("Login component", () => {
  beforeEach(() => {
    localStorage.setItem("token", loginUserMock.access_token);
  });
  it("should match snapshot", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render the RegisterBusiness component", () => {
    const mountComponent = shallow(
      <MemoryRouter>
        <Login store={weconnectStore} />
      </MemoryRouter>
    );
    expect(mountComponent.length).toBe(1);
  });
});
