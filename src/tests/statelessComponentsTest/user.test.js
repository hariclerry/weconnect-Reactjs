import React from "react";
import {shallow} from "enzyme";
import RegisterBusiness from "components/business/registerBusiness";
// import Businesses from "components/business/businessList";
import UserRegistration from "components/user/signUp";
import Login from "components/user/login";
import ResetUserPassword from "components/user/resetPassword";
// import Pagination from "components/business/pagination";
// import SearchBusiness from "components/business/searchBar";
// import SingleBusiness from "components/business/singleBusiness";



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

// describe('Pagination component',() => {

//   it('should match snapshot',() =>{
//       const wrapper = shallow(<Pagination />)
//       expect(wrapper).toMatchSnapshot();
//   })
// })

// describe('SearchBusiness component',() => {

//   it('should match snapshot',() =>{
//       const wrapper = shallow(<SearchBusiness />)
//       expect(wrapper).toMatchSnapshot();
//   })
// })

// describe('SingleBusiness component',() => {
//   const props = {
//     business:[]
//     }

//   it('should match snapshot',() =>{
//       const wrapper = shallow(<SingleBusiness {...props}/>)
//       expect(wrapper).toMatchSnapshot();
//   })
// })

