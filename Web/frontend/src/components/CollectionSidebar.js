import React from 'react';

const CollectionSidebar = ({ bookmarks, setSelectedCollection }) => {
  const collections = [...new Set(bookmarks.map(bookmark => bookmark.collection_name))];

  const handleClick = collection => {
    setSelectedCollection(collection);
  };

  return (
    <div className="collection-sidebar">
      <h2>Collections</h2>
      <ul>
        <li key="all" onClick={() => handleClick('All')}>All Bookmarks</li>
        {collections.map(collection => (
          <li key={collection} onClick={() => handleClick(collection)}>{collection}</li>
        ))}
      </ul>
    </div>
  );
}

export default CollectionSidebar;
