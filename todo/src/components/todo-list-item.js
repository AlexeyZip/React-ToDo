import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({label, important = false}) => {

const style = {
     color: important? 'steelblue' : 'black',
     fontWeight: important? 'bold' : 'normal'
}     
     return (
          <div className="d-flex justify-content-between">
               <span className="todo-list-item" style={style}>{label}</span>
               <div className="btn-container"> 
                     <button type="button" className="btn btn-outline-danger btn-sm"><i className="fa fa-trash"></i></button>
                    <button type="button" className="btn btn-outline-success btn-sm"><i className="fa fa-exclamation"></i></button>
               </div>
              
          </div>
          
     )  
}

export default TodoListItem;