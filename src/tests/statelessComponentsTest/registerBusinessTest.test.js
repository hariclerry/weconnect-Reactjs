import React from "react";
import {shallow} from "enzyme";
import { AddBusiness} from "../../containers/business/register"



const promiseFn = () =>  new Promise((resolve, reject) =>{
  
});

describe('registerBusiness', ()=>{
  let wrapper;

  beforeEach(()=>{
    const history = {
      push: jest.fn
    }
    wrapper = shallow(<AddBusiness registerBusiness={promiseFn} history={history} />)
  })

  it('should register business', ()=>{
    const e = {
      preventDefault: jest.fn,
      target:{
        elements:{
          name: {
            value: "andela"
          },
          category: {
            value: "tech"
          },
          location: {
            value: "bukoto"
          },
          description: {
            value: "This is andela"
          }
        }
      }
    }
    
    const spy = jest.spyOn(wrapper.instance(), "createBusiness");
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.instance().createBusiness(e);
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(1);
  })

  it('should match snapshot', () =>{
    expect(wrapper).toMatchSnapshot();
  })
})

