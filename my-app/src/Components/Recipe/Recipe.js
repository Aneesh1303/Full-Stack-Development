import { useState } from "react";
import List from "./List.js";
import search from "../../assets/search.svg";

const Recipe = () => {

    const [query, setQuery] = useState('')
    const [hits, setHits] = useState([])

    const updateLocalStorage = items => {
        let history = JSON.parse(localStorage.getItem('history')) ?? []
        history.push(items)
        localStorage.setItem('histroy', JSON.stringify(history))
    }

    const handleSearch = async () => {
        const endpoint = `https://api.edamam.com/search?q=${query}&app_id=c48b3ac7&app_key=9cf2ee4bb2ccac9e82c5777fa2822457`
    
        const res = await fetch(endpoint);
        const {hits} = await res.json();
        updateLocalStorage(query)
        setHits(hits) 
    }

    return ( 
        <div>
            <div id = "Recipe">
                <input onChange={(e) => setQuery(e.target.value)} type="text"/>
                <button onClick={handleSearch}><img src={search} alt="search"/></button>
            </div>
            <List hits={hits} />
        </div>
     );
}
 
export default Recipe;