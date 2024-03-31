import React from 'react';

const BookmarkList = ({ bookmarks }) => {
  return (
    <div className="bookmark-list">
      <h2>Bookmarks</h2>
      {bookmarks.map(bookmark => (
        <div className="bookmark" key={bookmark.id}>
          <h3>{bookmark.name}</h3>
          <p><strong>URL:</strong> <a href={bookmark.url}>{bookmark.url}</a></p>
          <p><strong>Note:</strong> {bookmark.note}</p>
          <p><strong>Tags:</strong> {bookmark.tag}</p>
        </div>
      ))}
    </div>
  );
}

export default BookmarkList;
