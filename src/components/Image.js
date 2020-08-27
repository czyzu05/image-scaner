import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Image.css'

const Image = ({ largeImageURL, tags, id }) => {
    return (
        <div className="imageWrapper">
            <img src={largeImageURL} alt={tags} />
            <Link to={`/image/${id}`}>
                <button>Search</button>
            </Link>

        </div>
    )
}

export default Image