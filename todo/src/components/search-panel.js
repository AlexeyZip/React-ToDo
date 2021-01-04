import React from 'react';

const SearchPanel = () => {
    const searchStyle = {fontSize: "20px"}
    const searchText = 'What are you look for?'
   return <input placeholder={searchText} style={searchStyle}></input>
  }

export default SearchPanel;  