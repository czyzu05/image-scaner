import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ImageView.css'

const ImageView = (props) => {
    const { largeImageURL: image, tags, user, pageURL } = props.location.state.image
    return (
        <div>
            <img src={image} alt={tags} />
            <p>&copy; pixabay</p>
            <h4>Author: <span>{user}</span></h4>
            <h4>Download: <span><a target="_blank" href={pageURL}>GO TO DOWNLOAD</a></span></h4>
            <button><Link to="/">GO TO HOME</Link></button>
        </div>
    )
}

export default ImageView