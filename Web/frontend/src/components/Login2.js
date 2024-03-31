import React, { useContext } from 'react';
import { GoogleOAuthProvider, googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { UserContext } from './UserContext'; // Import UserContext
import Bookmark from './Bookmarks'

function Login() {

    const { user, setUser } = useContext(UserContext); // Use UserContext
    const navigate = useNavigate(); // Initialize useNavigate

    const login = useGoogleLogin({
      onSuccess: (codeResponse) => {
          // Call backend login API with the codeResponse
          console.log(codeResponse.access_token)
          axios.post('http://localhost:3000/api/login', { user_token: codeResponse.access_token })
              .then((response) => {
                  // Assuming the response contains user data
                  console.log(response.data)
                  setUser(response.data); // Set user data
                  navigate('/bookmarks'); // Redirect to /bookmarks
              })
              .catch((error) => {
                  console.log('Login Failed:', error);
                  // Handle error
              });
      },
      onError: (error) => console.log('Login Failed:', error)
    });

    // log out function to log the user out of google and set the user to null
    const logOut = () => {
        googleLogout();
        setUser(null); // Set user to null
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1 style={{ marginBottom: '20px' }}>AI Enhanced Bookmark Manager</h1>
          {/* Your login form and logic */}
          <div>
                <br />
                <br />
                {user ? (
                    <div>
                        {/* <img src={user.picture} alt="user image" />
                        <h3>User Logged in</h3>
                        <p>Name: {user.name}</p>
                        <p>Email Address: {user.email}</p>
                        <br />
                        <br /> */}
                        <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px' }} onClick={logOut}>Log out</button>
                    </div>
                ) : (
                    <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }} onClick={login}>Sign in with Google 🚀 </button>
                )}
            </div>
        </div>
      );
    }
    
    export default Login;
