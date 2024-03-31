// Login.js
import React from 'react';
import Login2 from './Login2'
import { GoogleOAuthProvider,googleLogout,useGoogleLogin } from '@react-oauth/google';
function Login() {


  return (
    <div>
              <GoogleOAuthProvider clientId="216003529295-20rt9ajep8og64tvle027ffa3anpc8il.apps.googleusercontent.com">
            <Login2/>
              </GoogleOAuthProvider>,

    </div>
  );
}

export default Login;
