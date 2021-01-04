import React from 'react';
import ReactDOM from 'react-dom';

const items = ['Learn React.js','Build awesome app']

const TodoList = () => {
 return (
    <ul>
    <li>{items[0]}</li>
    <li>{items[1]}</li>
  </ul>
  )
}

const AppHeader = () => {
return  <h1>My ToDo list</h1>
}



const SearchPanel = () => {
  const searchStyle = {fontSize: "20px"}
  const searchText = 'What are you look for?'
 return <input placeholder={searchText} style={searchStyle}></input>
}

const App = () => {
 return (
  <div>
  <AppHeader/>
  <SearchPanel/>
 <TodoList/>
</div>
  )
}


ReactDOM.render(<App/>,document.getElementById('root'));
