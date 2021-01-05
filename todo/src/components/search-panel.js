import React from 'react';
import ItemStatusFilter from './item-status-filter';

const SearchPanel = () => {
    const searchStyle = {fontSize: "20px"}
    const searchText = 'What are you look for?'
   return (
     <div className="search-panel d-flex justify-content-between">
        <input placeholder={searchText} style={searchStyle}></input>
   <ItemStatusFilter/>
     </div>
  
   )
   
  }

export default SearchPanel;  