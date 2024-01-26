import React, { useState } from "react";
import '../styles/TodoItem.css';
import { Button, Form } from 'react-bootstrap';

const TodoItem = ({ inputValue }) => {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleCompleteChange = (e) => {
        setIsCompleted(e.currentTarget.checked);
    };

    const handleDelete = () => {
        alert("삭제됩니다.(구현x)");
    }

    const handleEdit = () => {
        alert("수정됩니다.(구현 x)");
    }

    return (
        <div className="itemContainer"style={{ backgroundColor : isCompleted ? 'grey' : 'white'}}>
            <div className="itemTop">
                <div className="text">
                    <span>{inputValue}</span>
                </div>
                <Form.Check 
                    type="switch"
                    id={`complete-switch-${inputValue}`}
                    label=""
                    checked={isCompleted}
                    onChange={handleCompleteChange}
                />
            </div>
            <div className="itemBottom">
                <Button variant="outline-danger" onClick={handleDelete}>삭제</Button>
                <Button variant="outline-warning" disabled={isCompleted} onClick={handleEdit}>수정</Button>
            </div>
        </div>
    );
};

export default TodoItem;
