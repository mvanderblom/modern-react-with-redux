const Comment = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src='https://source.unsplash.com/random' />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">Today at 6 pm</span>
                </div>
                <div className="text">
                    Nice Blog Post!
                </div>
            </div>
        </div>
    );
}

export default Comment;