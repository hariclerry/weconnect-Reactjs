import React from "react";
import {shallow, mount} from "enzyme";
import { MemoryRouter } from "react-router-dom";
import jwt from "jsonwebtoken";
import weconnectStore from "store";
import UserDashboard from "containers/business/dashboard";

const loginUserMock = { access_token: jwt.sign({ email: "clerry@gmail.com", password: "this199" }, "hard to guess string")}

describe('UserDashboard component',() =>{
  beforeEach(() => {
    localStorage.setItem("token", loginUserMock.access_token);

});
const wrapper = shallow(<UserDashboard email="clerry@gmail.com" businesses="Andela" username="hari"/>)
it('should match snapshot',() =>{
  expect(wrapper).toMatchSnapshot();
})

it("should render the UserDashboard component", () => {
  const mountComponent = shallow(<MemoryRouter><UserDashboard store = {weconnectStore}/></MemoryRouter>)
  expect(mountComponent.length).toBe(1);
  
});


})