import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import jwt from "jsonwebtoken";
import weconnectStore from "store";
import EditBusinessContainer from "containers/business/edit";

const loginUserMock = {
  access_token: jwt.sign(
    { email: "clerry@gmail.com", password: "this199" },
    "hard to guess string"
  )
};

describe("EditBusiness component", () => {
  beforeEach(() => {
    localStorage.setItem("token", loginUserMock.access_token);
  });
  it("should match snapshot", () => {
    const wrapper = shallow(<EditBusinessContainer />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render the EditBusiness component", () => {
    const mountComponent = shallow(
      <MemoryRouter>
        <EditBusinessContainer store={weconnectStore} />
      </MemoryRouter>
    );
    expect(mountComponent.length).toBe(1);
  });
});
