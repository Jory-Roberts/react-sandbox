import React from 'react';

const SearchItem = () => {
    return (
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            Search
            <label htmlFor="search">Search</label>
            <input
                id="search"
                type="test"
                role="searchbox"
                placeholder="Search Items"
            />
        </form>
    );
};

export default SearchItem;
