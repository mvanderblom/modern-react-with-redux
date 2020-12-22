import React from 'react'

class SearchComponent extends React.Component {

    state = {
        searchTerm: ''
    }

    onSearchSubmit = (e) => {
        console.log('search submitted')
        e.preventDefault();
        this.props.onSubmit(this.state.searchTerm)
    }

    render = () => {
        return (
            <div className="ui segment">
                <div className="ui form">
                    <form onSubmit={this.onSearchSubmit}>
                        <div className="field">
                            <label>Image Search</label>
                            <input
                                type="text"
                                value={this.state.searchTerm}
                                onChange={(e) =>{ this.setState({searchTerm: e.target.value}) }}/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchComponent