import React from "react";
import {shallow} from "enzyme";
import { EditBusinessContainer } from "../../containers/business/edit"



const promiseFn = () =>  new Promise((resolve, reject) =>{
  
});

describe('EditBusiness', ()=>{
  let wrapper;

  beforeEach(()=>{
  
    const history = {
      push: jest.fn
    }

  const  match = {
      params:  1
    }
    wrapper = shallow(<EditBusinessContainer editBusiness={promiseFn} history={history} match={match}/>)
  })

  it('should edit business', ()=>{
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
    
    const spy = jest.spyOn(wrapper.instance(), "updateBusiness");
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.instance().updateBusiness(e);
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(1);
  })

  it('should match snapshot', () =>{
    expect(wrapper).toMatchSnapshot();
  })
})
