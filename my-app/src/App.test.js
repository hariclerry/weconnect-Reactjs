import React from "react";
import ReactDOM from "react-dom";
import jwtDecode from "jwt-decode";
import jwt from "jsonwebtoken";
import mocklocalStorage from "tests/componentsTest/localStorage";
import App from "./App";

const loginUserMock = { access_token: jwt.sign({ email: "clerry@gmail.com", password: "this199" }, "hard to guess string")}

describe('app component',() =>{
  beforeEach(() => {
    localStorage.setItem("token", loginUserMock.access_token);
});
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

}

)


