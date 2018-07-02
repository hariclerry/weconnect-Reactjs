# We Connect APP

WeConnect Web App provides a platform that brings businesses and individuals together. 
This platform creates awareness for businesses and gives the users the ability to register their businesses and write reviews about the businesses they have interacted with. It is built using Python and Flask micro framework.

click here to access WeConnect https://hariclerry.github.io pages


FEATURES

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

INSTRUCTIONS

1. Pre-requisites
2. Setup and intallations
3. Authors


PRE-REQUISITES



Setup and Installation

clone the repo





The above setup file will install and initialise a virtual environment, install dependencies using `pip`
and run the server.

RUNNING TESTS


VERSIONS

The API runs with one version, Version 1 

Input `http:127.0.0.1:5000/` followed by any of the following endpoints to demo version 1.

|EndPoint|Functionality|
|---------|------------|
|[POST/v1/api/auth/register]|Creates a user account|
|[POST/v1/api/auth/login]|Logs in a user|
|[POST/v1/api/auth/logout]|Logs out a user|
|[POST/v1/api/auth/reset-password]|Password reset|
|[POST/v1/api/businesses]|Register a business|
|[PUT/v1/api/businesses/<business_id>]|Updates a business profile|
|[DELETE/v1/api/businesses/<business_id>]|Remove a business|
|[GET/v1/api/businesses]|Retrieves all businesses|
|[GET/v1/api/businesses/<business_id>]|Get a business|
|[POST/v1/api/businesses/<business_id>/reviews]|Add a review for a business|
|[GET/v1/api/businesses/<business_id>/reviews]|Get all reviews for a business|


For more about using the API check 127.0.0.1:5000/apidocs or [`https://weconnect-harriet5.herokuapp.com/apidocs/`](https://weconnect-harriet5.herokuapp.com/apidocs/)
How to run the application


Credits

[Harriet]: https://github.com/hariclerry