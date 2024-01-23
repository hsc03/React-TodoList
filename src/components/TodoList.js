import React from 'react';
import '../styles/TodoList.css';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
    return (
        <div className='todoListContainer'>
            {todos.map(todo => (
                <TodoItem key={todo.id} inputValue={todo.text} />
            ))}
        </div>
    );
};

export default TodoList;