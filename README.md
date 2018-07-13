[![Build Status](https://travis-ci.org/hariclerry/weconnect-Reactjs.svg?branch=master)](https://travis-ci.org/hariclerry/weconnect-Reactjs)
[![Test Coverage](https://api.codeclimate.com/v1/badges/79ef56c6b373e7fdc189/test_coverage)](https://codeclimate.com/github/hariclerry/weconnect-Reactjs/test_coverage)
# We Connect APP

Weconnect Business app (With ReactJS)
WeConnect Web App provides a platform that brings businesses and individuals together. This platform creates awareness for businesses and gives the users the ability to register their businesses and write reviews about the businesses they have interacted with. It is built using Python and Flask micro framework.

click here to access WeConnect https://hariclerry.github.io pages


### FEATURES

With WeConnect APP you can:
* create an account
* login into the account
* register a business
* update a business
* view a business
* delete a business
* add review on a business
* view reviews on a particular business
* logout

### Installation

1. Clone the app: `git clone https://github.com/hariclerry/weconnect-Reactjs.git`

2. Install dependencies
  ```npm install```

3. Run app
 ```npm start```

4. To build the app
 ```npm run build```

5. Testing

* In order to test the application you can run the command
```npm test``` 

* Run test coverage by running the command 
```npm test -- --coverage```

### Connect with the Python flask backend API
In order for the project to run locally you should clone the WeConnect backend python application which powers the api that this application consumes.

* Go to the [repository(https://github.com/hariclerry/weconnect.git)] for more on how to setup the API backend
* Make sure to have the backend server running at `http://127.0.0.1:5000`
* Go to the `baseUrl.js` file and change the base url API `http://127.0.0.1:5000`

### Checkout the live app on heroku
https://reactjs-weconnect.herokuapp.com/

### API
https://weconnect-harriet5.herokuapp.com/apidocs/

The API is written in python using the flask framework.