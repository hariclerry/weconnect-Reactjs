import React from "react";
import {shallow, mount} from "enzyme";
import { MemoryRouter } from "react-router-dom";
import jwt from "jsonwebtoken";
import weconnectStore from "store";
import RegisterBusiness from "containers/business/register";

const loginUserMock = { access_token: jwt.sign({ email: "clerry@gmail.com", password: "this199" }, "hard to guess string")}

describe('RegisterBusiness component',() =>{
  beforeEach(() => {
    localStorage.setItem("token", loginUserMock.access_token);
});
it('should match snapshot',() =>{
  const wrapper = shallow(<RegisterBusiness/>)
  expect(wrapper).toMatchSnapshot();
})

it("should render the RegisterBusiness component", () => {
  const mountComponent = shallow(<MemoryRouter><RegisterBusiness store = {weconnectStore}/></MemoryRouter>)
  expect(mountComponent.length).toBe(1);
  
});

})