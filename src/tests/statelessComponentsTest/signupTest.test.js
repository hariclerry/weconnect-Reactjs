import React from "react";
import {shallow, mount} from "enzyme";
import { UserSignup} from "../../containers/user/signup"



const promiseFn = () =>  new Promise((resolve, reject) =>{
  
});

describe('UserRegistration', ()=>{
  let wrapper;

  beforeEach(()=>{
    const history = {
      push: jest.fn
    }
    wrapper = shallow(<UserSignup registerUser={promiseFn} history={history} />)
  })

  it('should register user', ()=>{
    const e = {
      preventDefault: jest.fn,
      target:{
        elements:{
          name: {
            value: "harry"
          },
          email: {
            value: "test@tes.com"
          },
          password: {
            value: "test@tes.com"
          }
        }
      }
    }
    
    const spy = jest.spyOn(wrapper.instance(), "signUp");
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.instance().signUp(e);
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(1);
  })

  it('should match snapshot', () =>{
    expect(wrapper).toMatchSnapshot();
  })
})

