const ApprovalCard = (props) => {
    console.log(props)
    return (
        <div style={{border: 'solid 1px black'}}>
            {props.children}
            <button>Approve</button>
            <button>Reject</button>
        </div>
    );
};

export default ApprovalCard;