import React from "react";
import {shallow, mount} from "enzyme";
import { MemoryRouter } from "react-router-dom";
import jwt from "jsonwebtoken";
import weconnectStore from "store";
import SingleBusiness from "containers/business/singleBusiness";

const loginUserMock = { access_token: jwt.sign({ email: "clerry@gmail.com", password: "this199" }, "hard to guess string")}

describe('SingleBusiness component',() =>{
  beforeEach(() => {
    localStorage.setItem("token", loginUserMock.access_token);
});
it('should match snapshot',() =>{
  const wrapper = shallow(<SingleBusiness />)
  expect(wrapper).toMatchSnapshot();
})

it("should render the SingleBusiness component", () => {
  const mountComponent = shallow(<MemoryRouter>< SingleBusiness store = {weconnectStore}/></MemoryRouter>)
  expect(mountComponent.length).toBe(1);
  
});

}

)