import React from 'react';
import '../styles/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="headerContainer">
            <div className="headerTitle">
                <h2>Todo-List</h2>
            </div>
            <div className="headerInput">
                <Form.Control type="text" placeholder="할 일을 입력해주세요." />
                <Button type="submit" size="sm">추가</Button>
            </div>
        </div>
    );
};

export default Header;