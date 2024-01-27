import React, { useState } from 'react';
import "./styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap';
import Header from './components/Header';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  console.log(todos);

  const addTodoItem = (item) => {
    const newTodo = { id: Date.now(), text: item };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoItem = (id) => {
    const deletedTodo = todos.filter(todo => todo.id !== id);
    setTodos(deletedTodo);
  };

  const editTodoItem = (id, newText) => {
    const editTodo = todos.map(todo => todo.id === id ? {...todo, text: newText }: todo);
    setTodos(editTodo);
  };

  return (
    <div className='app'>
      <Container>
        <Row>
          <Header onAdd={addTodoItem} />
        </Row>
        <Row>
          <TodoList
            todos={todos}
            onDelete={deleteTodoItem}
            onEdit={editTodoItem}
          />
        </Row>
      </Container>
    </div>
  );
}

export default App;