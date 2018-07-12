import React from "react";
import {shallow, mount} from "enzyme";
import { ResetPassword } from "../../containers/user/resetPassword"



const promiseFn = () =>  new Promise((resolve, reject) =>{
  
});

describe('ResetPassword', ()=>{
  let wrapper;

  beforeEach(()=>{
    const history = {
      push: jest.fn
    }
    wrapper = shallow(<ResetPassword passwordReset={promiseFn} history={history} />)
  })

  it('should reset user password', ()=>{
    const e = {
      preventDefault: jest.fn,
      target:{
        elements:{
          email: {
            value: "test@tes.com"
          },
          new_password: {
            value: "test"
          }
        }
      }
    }
    
    const spy = jest.spyOn(wrapper.instance(), "Userpassword");
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.instance().Userpassword(e);
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(1);
  })

  it('should match snapshot', () =>{
    expect(wrapper).toMatchSnapshot();
  })
})

