import React from "react";
import '../styles/TodoItem.css';
import { Button } from 'react-bootstrap';

const TodoItem = ({ inputValue }) => {
    return (
        <div className="itemContainer">
            <div className="text">
                <span>{inputValue}</span>
            </div>
            <div className="buttons">
                <Button variant="outline-danger" size="sm">삭제</Button>
                <Button variant="outline-warning" size="sm">수정</Button>
                <Button variant="outline-success" size="sm">완료</Button>
            </div>
        </div>
    );
};

export default TodoItem;