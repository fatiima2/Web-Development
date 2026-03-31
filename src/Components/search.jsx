import react, { useState } from "react";
import './search.css'

const SearchForm = ({filterUsers}) => {

    const [searchField,setSearchField]=useState("")
    
    return (
        <div className="main-div">
            <div>
                <input type="text" placeholder="Search" onChange={(event)=>setSearchField(event.target.value)}/>
                <button onClick={()=>filterUsers(searchField)} >Search</button>
            </div>

        </div>
    )
}

export default SearchForm;