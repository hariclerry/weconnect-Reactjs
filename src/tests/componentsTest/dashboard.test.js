import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import jwt from "jsonwebtoken";
import weconnectStore from "store";
import UserDashboard from "../../components/user/user";

const loginUserMock = {
  access_token: jwt.sign(
    { email: "clerry@gmail.com", password: "this199" },
    "hard to guess string"
  )
};

describe("UserDashboard component", () => {
  beforeEach(() => {
    localStorage.setItem("token", loginUserMock.access_token);
  });
  it("should match snapshot", () => {
    const wrapper = shallow(<UserDashboard />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render the UserDashboard component", () => {
    const mountComponent = shallow(
      <MemoryRouter>
        <UserDashboard store={weconnectStore} />
      </MemoryRouter>
    );
    expect(mountComponent.length).toBe(1);
  });
});
