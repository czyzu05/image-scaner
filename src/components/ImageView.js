import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ImageView.css'

const ImageView = (props) => {
    const { largeImageURL: image, tags, user, pageURL } = props.location.state.image
    return (
        <div className="viewImageWrapper">
            <img src={image} alt={tags} className="img" />
            <p className="info">&copy; pixabay</p>
            <h4 className="author">Author: <span className="authorName">{user}</span></h4>
            <h4 className="download">Download: <span><a target="_blank" className="downloadLink" href={pageURL}>GO TO DOWNLOAD</a></span></h4>
            <button className="homeButton"><Link to="/" className="homeLink">GO TO HOME</Link></button>
        </div>
    )
}

export default ImageView