import React from 'react'

const ImageSearch = ({ handleGetRequest }) => {



    return (
        <form onSubmit={handleGetRequest}>
            <input type="text" autoComplete="off" name="searchValue" placeholder="search for images..." />
            <button>Search</button>
        </form>
    )
}

export default ImageSearch