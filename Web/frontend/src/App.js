import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Bookmarks from './components/Bookmarks';
import { UserContext } from './components/UserContext';



function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bookmarks" element={<Bookmarks/>} />


          {/* You can add more routes here */}
        </Routes>
        </UserContext.Provider>
      </div>
    </Router>
  );
  // const [bookmarks, setBookmarks] = useState([]);
  // const [selectedCollection, setSelectedCollection] = useState('All');

  // useEffect(() => {
  //   axios.get('http://localhost:3000/api/data')
  //     .then(response => {
  //       setBookmarks(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching bookmarks:', error);
  //     });
  // }, []);

  // const filteredBookmarks = selectedCollection === 'All' ?
  //   bookmarks :
  //   bookmarks.filter(bookmark => bookmark.collection_name === selectedCollection);

  // return (
  //   <div className="app-container">
  //     <Navbar />
  //     <CollectionSidebar
  //       bookmarks={bookmarks}
  //       setSelectedCollection={setSelectedCollection}
  //     />
  //     <BookmarkList bookmarks={filteredBookmarks} />
  //   </div>
  // );
}

export default App;
