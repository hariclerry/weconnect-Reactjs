import React from "react";
import {shallow} from "enzyme";
import { Reviews } from "../../containers/business/reviews"



const promiseFn = () =>  new Promise((resolve, reject) =>{
  
});

describe('reviewBusiness', ()=>{
  let wrapper;

  beforeEach(()=>{
    const history = {
      push: jest.fn
    }

  const  match = {
      params:  1
    }
  

    wrapper = shallow(<Reviews reviewBusiness={promiseFn} history={history} match={match} singleBusiness={promiseFn} fetchReview={promiseFn}/>)
  })

  it('should review business', ()=>{
    const e = {
      preventDefault: jest.fn,
      target:{
        elements:{
          description: {
            value: "This is andela"
          }
        }
      }
    }
    
    const spy = jest.spyOn(wrapper.instance(), "addReview");
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.instance().addReview(e);
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(1);
  })

  it('should match snapshot', () =>{
    expect(wrapper).toMatchSnapshot();
  })
})
