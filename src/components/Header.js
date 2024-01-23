import React, { useState } from 'react';
import '../styles/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

const Header = ({ onAddItem }) => {
    const [inputValue, setInputValue] = useState('');
    const [validated, setValidated] = useState(false);

    const inputChange = (e) => {
        setInputValue(e.target.value);
    };

    const addItem = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            setValidated(true);
        } else {
            setValidated(false);
            onAddItem(inputValue);
            setInputValue('');
        }
    };

    return (
        <div className="headerContainer">
            <div className="headerTitle">
                <h2>Todo-List</h2>
            </div>
            <div className="headerInput">
                <Form noValidate validated={validated} onSubmit={addItem}>
                    <Form.Group>
                        <Form.Control
                            required
                            type="text"
                            value={inputValue}
                            onChange={inputChange}
                            placeholder="할 일을 입력해주세요."
                            maxLength={"13"} // 한글 영어 따로 구분하여 판별하는 로직 필요
                        />
                        <Form.Control.Feedback type="invalid">
                            내용을 입력해주세요!
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit" size="sm">추가</Button>
                </Form>
            </div>
        </div>
    );
};

export default Header;
