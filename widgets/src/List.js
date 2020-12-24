import {useEffect, useState} from "react";
import Wikipedia from "./Wikipedia";
import './List.css'

const List = () => {

    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    const [timeoutId, setTimeoutId] = useState()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if(term) {
                Wikipedia
                    .get('', { params:{ srsearch: term } })
                    .then(response => setResults(response.data.query.search))
            }
        }, 500)

        return () => clearTimeout(timeoutId)
    }, [term])

    const result_jsx = results.map(r => <div key={r.pageid}><h1>{r.title}</h1><p dangerouslySetInnerHTML={{__html:r.snippet}}></p></div>)

    return (
        <div>
            <div>
                label
                <input value={term} onChange={(e) => setTerm(e.target.value)} />
            </div>
            <div>
                {result_jsx}
            </div>
        </div>
    );
}

export default List