import './searchbar.css';
import React from 'react';

function SearchBar (props){
    return (
        <div className="section-content-controls">
            <form action="">
                <input type="text" className="repo-search-bar" placeholder="Find something..." />
            </form>
        </div>
    );
}

export default SearchBar;