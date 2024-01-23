import React, { useState } from 'react';
import "./styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodoItem = (item) => {
    const newTodo = { id: Date.now(), text: item };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className='app'>
      <Header onAddItem={addTodoItem}/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;