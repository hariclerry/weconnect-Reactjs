import React from "react";
import { shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import jwt from "jsonwebtoken";
import weconnectStore from "store";
import Reviews from "containers/business/reviews";

const loginUserMock = { access_token: jwt.sign({ email: "clerry@gmail.com", password: "this199" }, "hard to guess string")}

describe('Reviews component',() =>{
  beforeEach(() => {
    localStorage.setItem("token", loginUserMock.access_token);
});
it('should match snapshot',() =>{
  const wrapper = shallow(<Reviews/>)
  expect(wrapper).toMatchSnapshot();
})

it("should render the RegisterBusiness component", () => {
  const mountComponent = shallow(<MemoryRouter><Reviews store = {weconnectStore}/></MemoryRouter>)
  expect(mountComponent.length).toBe(1);
  
});

}

)