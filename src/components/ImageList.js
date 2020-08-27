import React from 'react'
import Image from './Image'

import '../styles/ImageList.css'

const ImageList = ({ images }) => {
    return (
        <div className="imagesWrapper">
            {images.map((image) => (
                <Image {...image} key={image.id} />
            ))}
        </div>
    )
}

export default ImageList