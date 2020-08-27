import React from 'react'

import '../styles/ImageSearch.css'

const ImageSearch = ({ handleGetRequest }) => {



    return (
        <form onSubmit={handleGetRequest} className="imageSearch-form">
            <input type="text" autoComplete="off" name="searchValue" placeholder="search for images..." />
            <button>Search</button>
        </form>
    )
}

export default ImageSearch