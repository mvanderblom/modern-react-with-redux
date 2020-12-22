import React from 'react'
import ReactDOM from 'react-dom'
import Comment from './CommentDetail'
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <Comment author="Sam" />
            </ApprovalCard>
            <ApprovalCard>
                <Comment author="Jan" />
            </ApprovalCard>
            <ApprovalCard>
                <Comment author="Wim" />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))