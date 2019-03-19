
# Angular_Authentication
Angular authentication and guarding the route using route guard and json web tokens
(Followed Codevolution)
1. Add the jwt to the backend and send the tokens to the front end
2. Store the tokens in the local storage
3. Create a route guard which will check the token in the localstorage (ng g guard auth)
4. Add the loggedin function in the auth service which checks the localstorage for the token
5. add the guard in the app routing file to all the routes (using canActivate : [AuthGuard])
6. Now we need to verify the token -  for this we send the token from the browser to the server using interceptors that intercepts http requests 
and transforms them and sends them to the server for verification
  1. Send the token from browser to the server
    a. create interceptor service
    b. add a function that calls the localstorage for the token and call this function from the interceptor service
    c. add the interceptor service details in app module's provider section - add the object having provide, useClass, multi
  2. Verification at the backend
    a. take the token received at the backened from the interceptor (header) and verify the token
    b. Also, guard the route using the function used for verification
    c. Handle the error that arises when the token is invalid
7. Logout feature
  1. import the auth service in appmodule
  2. add condition using ngIf in html of the home page
  3.add alog out function removing the token from the localstorage
