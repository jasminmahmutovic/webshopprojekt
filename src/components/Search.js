import React from 'react'
import { useState } from 'react';

import { BsSearch } from "react-icons/bs";


const Search = () => {

    
    const [searchTerm, setSearchTerm] = useState("");
  
  
    const searchField = (event) =>{
        var lowerCase = event.target.value.toLowerCase();
        setSearchTerm(lowerCase);
        console.log(lowerCase)
   }


  return (
    <div>
     <form> 
        <i><BsSearch></BsSearch></i>
        <input 
        type="text"
        placeholder="Sök..."
        value={searchTerm}
        onChange={searchField}
        ></input>
        </form>
    </div>
  )
}

export default Search