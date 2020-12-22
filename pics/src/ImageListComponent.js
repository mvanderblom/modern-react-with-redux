import React from 'react'
import ImageCard from "./ImageCard";
import './ImageListComponent.css'

class ImageListComponent extends React.Component {
    render() {
        console.log(this.props.images)
        const images = this.props.images.map(image => <ImageCard key={image.id} image={image} />)
        return <div className="imageList">{images}</div>
    }
}

export default ImageListComponent