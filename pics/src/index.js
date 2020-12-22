import React from 'react';
import ReactDOM from 'react-dom'
import unsplash from "./Unsplash";
import SearchComponent from "./SearchComponent";
import ImageListComponent from "./ImageListComponent";

class App extends React.Component {
    state = {
        images: []
    }

    onSearchSubmit = async (term) => {
        console.log('searching for', term)
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            }
        });

        this.setState({images: (response.data.results)})
    }

    render = () => {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchComponent onSubmit={this.onSearchSubmit} />
                Found {this.state.images.length} images
                <ImageListComponent images={this.state.images}></ImageListComponent>
            </div>
        );
    }
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);