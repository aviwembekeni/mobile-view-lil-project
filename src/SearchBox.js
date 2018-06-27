import React from "react";

const SearchBox = ({searchChange}) => {
    return (
       <input 
         className="" 
         type="search" 
         placeholder="search robots"
         onChange={searchChange}/>
    )
}

export default SearchBox;