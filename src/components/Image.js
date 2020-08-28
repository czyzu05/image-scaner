import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Image.css'

const Image = (props) => {
    const { largeImageURL, tags, id } = props
    return (
        <div className="imageWrapper">
            <img src={largeImageURL} alt={tags} />
            <Link to={{
                pathname: `/image/${id}`,
                state: { image: props }
            }}>
                <button>Search</button>
            </Link>

        </div>
    )
}

export default Image