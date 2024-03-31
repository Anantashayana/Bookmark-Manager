// Home.js
import React from 'react';
import Login from './Login'
import { GoogleOAuthProvider,googleLogout,useGoogleLogin } from '@react-oauth/google';

function Home() {
  return (
    <div>
      {/* <h1>Welcome to BookmarkManager</h1> */}
      <GoogleOAuthProvider clientId="216003529295-20rt9ajep8og64tvle027ffa3anpc8il.apps.googleusercontent.com">
        <Login/>
      </GoogleOAuthProvider>,
    </div>
  );
}

export default Home;
