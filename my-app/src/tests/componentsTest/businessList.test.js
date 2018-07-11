import React from "react";
import {shallow, mount} from "enzyme";
import { MemoryRouter } from "react-router-dom";
import jwt from "jsonwebtoken";
import weconnectStore from "store";
import BusinessList from "containers/business/businessList";

const loginUserMock = { access_token: jwt.sign({ email: "clerry@gmail.com", password: "this199" }, "hard to guess string")}

describe('BusinessList component',() =>{
  beforeEach(() => {
    localStorage.setItem("token", loginUserMock.access_token);
});
it('should match snapshot',() =>{
  const wrapper = shallow(<BusinessList/>)
  expect(wrapper).toMatchSnapshot();
})

it("should render the BusinessList component", () => {
  const mountComponent = shallow(<MemoryRouter><BusinessList store = {weconnectStore}/></MemoryRouter>)
  expect(mountComponent.length).toBe(1);
  
});

}

)