import React, {useState} from 'react'
import Accordion from "./Accordion";
import List from "./List";
import Dropdown from "./Dropdown";

const App = () => {
        const [items] = useState([
            {
                q: 'How do you do?',
                a: 'Very well, thanks'
            },
            {
                q: 'How do you really do?',
                a: 'Pretty good actually, how about you?'
            },
            {
                q: 'But, how do you do really?',
                a: 'Go away!'
            },
        ])
        const [options] = useState([
            {
                id: 'red',
                value: 'Red'
            },
            {
                id: 'green',
                value: 'Green'
            },
            {
                id: 'blue',
                value: 'Blue'
            },
        ])
        const [selected, setSelected] = useState(options[0])
        return (
            <div>
                <Dropdown selected={selected} onSelect={(option) => setSelected(option)} options={options} />
                <h1>selected: {selected.value}</h1>
                <List />
                <Accordion items={items} />
            </div>
        )
}

export default App