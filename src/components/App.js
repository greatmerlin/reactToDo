import { func } from 'prop-types';
import React from 'react';
import ToDoItem from './ToDoItem';
import '../style.css';
import todosData from '../todosData';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this);
    }   

    handleChange(id) {
        this.setState((prevState) => {
            const updatedTodos = prevState.todos.map(todo => {   // new array, replaces the old one
                if (todo.id === id) {
                    todo.completed = !todo.completed    // that one item is changed from true/false
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const toDoitemsHere = this.state.todos.map(item => 
        
        <ToDoItem key = {item.id} item = {item} handleChange = {this.handleChange} />)
        
        return(
            <div className='todo-list'>
                {toDoitemsHere}
            </div>
        )
    }
}

export default App;

