import React from 'react';
import ReactDOM from 'react-dom';
import SeasonComponent from './SeasonComponent'

const App = () => {
    return (
        <SeasonComponent />
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)