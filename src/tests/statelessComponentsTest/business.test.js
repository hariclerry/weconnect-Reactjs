import React from "react";
import {shallow} from "enzyme";
import RegisterBusiness from "components/business/registerBusiness";
// import Businesses from "components/business/businessList";
import ReviewBusiness from "components/business/addReview";
import Dashboard from "components/business/dashboard";
import EditBusiness from "components/business/editBusiness";
import Pagination from "components/business/pagination";
import SearchBusiness from "components/business/searchBar";
import SingleBusiness from "components/business/singleBusiness";



describe('RegisterBusiness component',() => {

  it('should match snapshot',() =>{
      const wrapper = shallow(<RegisterBusiness />)
      expect(wrapper).toMatchSnapshot();
  })
})

// describe('Businesses component',() => {
//   const props = {
//     map: []
//     }

//   it('should match snapshot',() =>{
//       const wrapper = shallow(<Businesses {...props}/>)
//       expect(wrapper).toMatchSnapshot();
//   })
// })


describe('ReviewBusiness component',() => {
  const props = {
    businessName:[]
    }

  it('should match snapshot',() =>{
      const wrapper = shallow(<ReviewBusiness {...props}/>)
      expect(wrapper).toMatchSnapshot();
  })
})

describe('Dashboard component',() => {

  it('should match snapshot',() =>{
      const wrapper = shallow(<Dashboard />)
      expect(wrapper).toMatchSnapshot();
  })
})

describe('EditBusiness component',() => {

  it('should match snapshot',() =>{
      const wrapper = shallow(<EditBusiness />)
      expect(wrapper).toMatchSnapshot();
  })
})

describe('Pagination component',() => {

  it('should match snapshot',() =>{
      const wrapper = shallow(<Pagination />)
      expect(wrapper).toMatchSnapshot();
  })
})

describe('SearchBusiness component',() => {

  it('should match snapshot',() =>{
      const wrapper = shallow(<SearchBusiness />)
      expect(wrapper).toMatchSnapshot();
  })
})

describe('SingleBusiness component',() => {
  const props = {
    business:[]
    }

  it('should match snapshot',() =>{
      const wrapper = shallow(<SingleBusiness {...props}/>)
      expect(wrapper).toMatchSnapshot();
  })
})

