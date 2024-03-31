import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import CollectionSidebar from './CollectionSidebar';
import BookmarkList from './BookmarkList';
import { UserContext } from './UserContext'; // Import UserContext
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Bookmarks() {

    const { user } = useContext(UserContext); // Use UserContext
    const navigate = useNavigate(); // Initialize useNavigate
    const [bookmarks, setBookmarks] = useState([]);
    const [selectedCollection, setSelectedCollection] = useState('All');

    useEffect(() => {
        if (!user) {
            // Redirect to login if no user data
            navigate('/login');
        } else {
            // Fetch bookmarks using user data
            console.log(user.user.id)
            axios.get(`http://localhost:3000/api/data/${user.user.id}`) // Use user id in API call
                .then(response => {
                    setBookmarks(response.data);
                })
                .catch(error => {
                    console.error('Error fetching bookmarks:', error);
                });
        }
    }, [user]); // Add user as dependency

    const filteredBookmarks = selectedCollection === 'All' ?
        bookmarks :
        bookmarks.filter(bookmark => bookmark.collection_name === selectedCollection);

    return (
        <div className="app-container">
            <Navbar />
            <CollectionSidebar
                bookmarks={bookmarks}
                setSelectedCollection={setSelectedCollection}
            />
            <BookmarkList bookmarks={filteredBookmarks} />
        </div>
    );
}

export default Bookmarks;
