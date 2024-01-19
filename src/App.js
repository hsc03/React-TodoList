import React from 'react';
import "./styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
// import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className='app'>
      <Header />
      {/* <TodoList /> */}
    </div>
  );
}

export default App;