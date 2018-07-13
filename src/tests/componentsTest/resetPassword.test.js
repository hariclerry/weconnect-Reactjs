import React from "react";
import {shallow, mount} from "enzyme";
import { MemoryRouter } from "react-router-dom";
import jwt from "jsonwebtoken";
import weconnectStore from "store";
import ResetPassword from "containers/user/resetPassword";

const loginUserMock = { access_token: jwt.sign({ email: "clerry@gmail.com", password: "this199" }, "hard to guess string")}

describe('ResetPassword component',() =>{
  beforeEach(() => {
    localStorage.setItem("token", loginUserMock.access_token);
});
it('should match snapshot',() =>{
  const wrapper = shallow(<ResetPassword />)
  expect(wrapper).toMatchSnapshot();
})

it("should render the ResetPassword component", () => {
  const mountComponent = shallow(<MemoryRouter>< ResetPassword store = {weconnectStore}/></MemoryRouter>)
  expect(mountComponent.length).toBe(1);
  
});

}

)