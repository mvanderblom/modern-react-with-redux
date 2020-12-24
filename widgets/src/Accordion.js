import React from 'react';

const Accordion = (props) => {
    const panels = props.items.map((it, i) => <div key={i}><h1>{it.q}</h1><span>{it.a}</span></div>)
    return (
        <div>
            <h1>Acc</h1>
            {panels}
        </div>
    )
}

export default Accordion