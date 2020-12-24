import {useEffect, useRef, useState} from "react";

const Dropdown = (props) => {
    const [open, setOpen] = useState(0)

    useEffect(() => {
        const onBodyClick = (event) => {
            if(ref.current.contains(event.target))
                return;
            console.log('body click')
            setOpen(0)
        };

        document.body.addEventListener('click', onBodyClick);
        return () => {
            document.body.removeEventListener('click', onBodyClick)
        };
    })

    const ref = useRef();

    const options = props.options.map(o => (
        <div onClick={(e) => {
            console.log('option click')
            props.onSelect(o)
            setOpen(0)
        }} id={o.id} key={o.id}>
            Option: {o.value}
        </div>
    ));
    return (
        <div ref={ref}>
            <h1>open: {open}</h1>
            <div onClick={() => {
                console.log('select click')
                setOpen(1)
            }}>
                Select:
                {options}
            </div>
        </div>
    )
};

export default Dropdown