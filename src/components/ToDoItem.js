import React from 'react';
import '../style.css';

function ToDoItem (props) {

    const leStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
        }

    return(
        <div className='todo-item'>
            
            <input type="checkbox" 
            onChange={() => props.handleChange(props.item.id)} /* match up with the id when you click on an item */
            checked={props.item.completed}/>
            
            <p style={props.item.completed ? leStyle : null}>{props.item.text}</p>
        </div>
    )
}

export default ToDoItem;

