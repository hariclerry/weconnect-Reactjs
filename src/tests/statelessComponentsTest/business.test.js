import React from "react";
import { shallow } from "enzyme";
import RegisterBusiness from "components/business/register";
import ReviewBusiness from "components/business/reviews";
import Dashboard from "components/user/user";
import EditBusiness from "components/business/edit";
import Pagination from "components/business/pagination";
import SearchBusiness from "components/business/searchBar";
import SingleBusiness from "components/business/business";



describe('RegisterBusiness component',() => {

  it('should match snapshot',() =>{
      const wrapper = shallow(<RegisterBusiness />)
      expect(wrapper).toMatchSnapshot();
  })


  it('should match snapshot',() =>{
    const wrapper = shallow(<RegisterBusiness/>)
    const form = wrapper.find("form")
    expect(form).toHaveLength(1);
  })
})


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
  it('should match snapshot',() =>{
    const wrapper = shallow(<EditBusiness/>)
    const form = wrapper.find("form")
    expect(form).toHaveLength(1);
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

  it('should match snapshot',() =>{
    const wrapper = shallow(<SearchBusiness/>)
    const form = wrapper.find("form")
    expect(form).toHaveLength(1);
  })
  
})

describe('SingleBusiness component',() => {
  const props = {
    business:{name:"hari"}
    }

  it('should match snapshot',() =>{
      const wrapper = shallow(<SingleBusiness {...props}/>)
      expect(wrapper).toMatchSnapshot();
  })
})





  



