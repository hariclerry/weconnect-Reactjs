import React from "react";
import {shallow, mount} from "enzyme";
import { MemoryRouter } from "react-router-dom";
import jwt from "jsonwebtoken";
import weconnectStore from "store";
import RegisterBusiness from "containers/business/registerBusiness";

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

// it('checks that the create business form submits', ()=>{
//   const RegisterBusinessComponent = mount(<MemoryRouter><RegisterBusiness store = {weconnectStore}/></MemoryRouter>)
//   let name = RegisterBusinessComponent.find('input[name="name"]')
//   name.simulate('change', {target:{value: 'ANDELA'}});
//   let category = RegisterBusinessComponent.find('input[name="category"]')
//   category.simulate('change', {target:{value: 'TECHNOLOGY'}});
//   let location = RegisterBusinessComponent.find('input[name="businessName"]')
//   location.simulate('change', {target:{value: 'BUKOTO'}});
//   let description = RegisterBusinessComponent.find('textarea[name="description"]')
//   description.simulate('change', {target:{value: 'This is Andela'}});
//   RegisterBusinessComponent.find('form.registerBusinessForm').simulate('submit');
// });

})