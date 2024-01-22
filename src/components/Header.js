import React, { useState } from 'react';
import '../styles/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap';

const Header = () => {
    const [inputValue, setInputValue] = useState('');

    const inputChange = (e) => {
        setInputValue(e.target.value)
    };

    return (
        <div className="headerContainer">
            <div className="headerTitle">
                <h2>Todo-List</h2>
            </div>
            <div className="headerInput">
                <Form.Control
                    type="text"
                    value={inputValue}
                    onChange={inputChange}
                    placeholder="할 일을 입력해주세요."
                />
                <Button type="submit" size="sm">추가</Button>
            </div>
        </div>
    );
};

export default Header;