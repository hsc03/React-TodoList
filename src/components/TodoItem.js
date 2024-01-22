import React from "react";
import '../styles/TodoItem.css';
import { Button } from 'react-bootstrap';

const TodoItem = () => {
    return (
        <div className="itemContainer">
            <div className="text">
                <span>테스트 중인 그저 그런 텍스트</span>
            </div>
            <div className="buttons">
                <Button variant="outline-danger">삭제</Button>
                <Button variant="outline-warning">수정</Button>
                <Button variant="outline-success">완료</Button>
            </div>
        </div>
    );
};

export default TodoItem;