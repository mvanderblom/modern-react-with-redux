import React from "react";

class ImageCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { spans: 0 }
        this.imageRef = React.createRef();
    }

    componentDidMount = () => {
        this.imageRef.current.addEventListener('load', this.setSpans)
        // console.log(this.imageRef)
    }

    setSpans = () => {
        this.setState({spans: Math.ceil(this.imageRef.current.clientHeight/10)})
    }

    render = () =>{
        const {urls, description} = this.props.image
        return <div style={{gridRowEnd: `span ${this.state.spans}`}}><img ref={this.imageRef} src={urls.regular} alt={description} /></div>
    }
}

export default ImageCard