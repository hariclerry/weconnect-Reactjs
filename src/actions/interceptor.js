import fetchIntercept from 'fetch-intercept';

const unregister = fetchIntercept.register({
    request: function (url, config) {
        // Modify the url or config here
        return [url, config];
    },

    response: function (response) {
    //    console.log('response body',response)
       switch (response.status) {
           
           case 401:
               localStorage.removeItem('access_token');
               break;
           case 500:
             break;
       
           default:
               break;
       }
        return response;
    },

});

export default unregister;