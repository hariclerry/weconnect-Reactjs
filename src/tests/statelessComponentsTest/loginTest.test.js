import React from "react";
import {shallow, mount} from "enzyme";
import {UserLogin} from "../../containers/user/login"



const promiseFn = () =>  new Promise((resolve, reject) =>{
  
});

describe('Login', ()=>{
  let wrapper;
  beforeEach(()=>{
    const user = {}
    const history = {
      push: jest.fn
    }
    wrapper = shallow(<UserLogin loginUser={promiseFn} user={user} history={history} />)
  })

  it('should login user', ()=>{
    const e = {
      preventDefault: jest.fn,
      target:{
        elements:{
          email: {
            value: "test@tes.com"
          },
          password: {
            value: "test@tes.com"
          }
        }
      }
    }
    
    const spy = jest.spyOn(wrapper.instance(), "Login");
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.instance().Login(e);
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(1);
  })

  it('should match snapshot', () =>{
    expect(wrapper).toMatchSnapshot();
  })
})



  



