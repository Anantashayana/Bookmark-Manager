import React from 'react';
import  { useContext, useEffect, useState } from 'react';
import { UserContext } from './UserContext'; // Import UserContext
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import './Navbar.css';



const Navbar = () => {
  const { user } = useContext(UserContext); // Use UserContext
  const navigate = useNavigate(); // Initialize useNavigate
  const [name, setName] = useState([]);
  // const [pic, setPic] = useState([]);


  
  useEffect(() => {
    if (!user) {
        // Redirect to login if no user data
        navigate('/login');
    } else {
        // Fetch bookmarks using user data
       setName(user.user.name)
    }
}, [user]); // Add user as dependency


return (
  <nav className="navbar">
      <div className="navbar__container">
          <h1 className="navbar__logo">Bookmark Manager</h1>
          {user && (
              <div className="navbar__user">
                  <h3 className="navbar__username">{name}</h3>
                  {/* {profilePicture && <img className="navbar__profile-picture" src={profilePicture} alt="Profile" />} */}
              </div>
          )}
      </div>
  </nav>
);

}

export default Navbar;
