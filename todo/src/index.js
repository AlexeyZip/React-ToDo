import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'
import TodoList from './components/todo-list'
import './index.css'


const App = () => {

const todoData = [
  {label: 'Drink coffee', important: false, id: 1},
  {label: 'Build awesome app', important: true, id: 2},
  {label: 'Buy a new car', important: false, id: 3}
]

 return (
  <div className="app">
  <AppHeader/>
  <SearchPanel/>
 <TodoList todos={todoData}/>
</div>
  )
}


ReactDOM.render(<App/>,document.getElementById('root'));
