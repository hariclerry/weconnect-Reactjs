import React from "react";
import {shallow} from "enzyme";
import RegisterBusiness from "components/business/registerBusiness";
// import Businesses from "components/business/businessList";
import UserRegistration from "components/user/signup";
import Login from "components/user/login";
import ResetUserPassword from "components/user/resetPassword";
import AuthNav from "components/common/authNavbar";
import Footer from "components/common/footer";
import IndexPage from "components/common/indexPage";



describe('UserRegistration component',() => {

  it('should match snapshot',() =>{
      const wrapper = shallow(<UserRegistration />)
      expect(wrapper).toMatchSnapshot();
  })
})


describe('Login component',() => {

  it('should match snapshot',() =>{
      const wrapper = shallow(<Login />)
      expect(wrapper).toMatchSnapshot();
  })
})

describe('ResetUserPassword component',() => {

  it('should match snapshot',() =>{
      const wrapper = shallow(<ResetUserPassword />)
      expect(wrapper).toMatchSnapshot();
  })
})

describe('AuthNav component',() => {

  it('should match snapshot',() =>{
      const wrapper = shallow(<AuthNav />)
      expect(wrapper).toMatchSnapshot();
  })
})

describe('Footer component',() => {

  it('should match snapshot',() =>{
      const wrapper = shallow(<Footer />)
      expect(wrapper).toMatchSnapshot();
  })
})

describe('IndexPage component',() => {

  it('should match snapshot',() =>{
      const wrapper = shallow(<IndexPage />)
      expect(wrapper).toMatchSnapshot();
  })
})

