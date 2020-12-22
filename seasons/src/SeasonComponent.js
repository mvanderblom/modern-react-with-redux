import React from 'react'

class SeasonComponent extends React.Component{
    state = {
        lat: 0.0,
        long: 0.0
    }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (pos) => {
                console.log(pos)
                this.setState({
                    lat: pos.coords.latitude,
                    long: pos.coords.longitude
                })
            },
            (err) => console.log(err))
    }

    render() {
        return (
            <div>lat: {this.state.lat}, long: {this.state.long}</div>
        );
    }
}

export default SeasonComponent