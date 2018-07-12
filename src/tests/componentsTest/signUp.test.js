import React from "react";
import {shallow, mount} from "enzyme";
import { MemoryRouter } from "react-router-dom";
import weconnectStore from "store";
import UserSignup from "containers/user/signup";


describe('UserSignup component',() =>{
  beforeEach(() => {
});
it('should match snapshot',() =>{
  const wrapper = shallow(<UserSignup/>)
  expect(wrapper).toMatchSnapshot();
})

it("should render the RegisterBusiness component", () => {
  const mountComponent = mount(<MemoryRouter><UserSignup store = {weconnectStore}/></MemoryRouter>)
  expect(mountComponent.length).toBe(1);
  
});

}

)