import React from 'react';
import '../styles/TodoList.css';
import TodoItem from './TodoItem';
import { Container, Row, Col } from 'react-bootstrap';

const TodoList = ({ todos, onDelete, onEdit }) => {
    return (
        <Container>
            <div className='todoListContainer'>
                <Row>
                    {todos.map(todo => (
                        <Col md={3} key={todo.id}>
                            <TodoItem
                                id={todo.id}
                                inputValue={todo.text}
                                onDelete={() => onDelete(todo.id)}
                                onEdit={onEdit}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    );
};

export default TodoList;