import React from "react";
import {shallow, mount} from "enzyme";
import ReviewBusiness from "../../components/business/reviews"





describe('ReviewBusiness', ()=>{
  let wrapper;
  beforeEach(()=>{
    const reviews = []
    const addReview = {}
    const businessName = {}
    wrapper = shallow(<ReviewBusiness
                        reviews={reviews} addReview = {addReview}
                        businessName={businessName} />)
  })

  it('should match snapshot', () =>{
    expect(wrapper).toMatchSnapshot();
  })
})



  



