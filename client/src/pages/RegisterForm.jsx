
import React, { useState } from 'react';
import { Form, Button, Container, FloatingLabel } from 'react-bootstrap';
import { userRegister } from '../service/allapi';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const navigate=useNavigate();

    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await userRegister(userData);
            alert('User registered successfully:', response);
            navigate('/login')
        } catch (error) {
            alert('Registration failed:', error.message);
        }
    };

    return (
        <Container className='w-50 mt-5' style={{backgroundColor:''}}>
            <h1 className='text-center mt-5'>User Register</h1>
            <Form onSubmit={handleFormSubmit} className='mt-5  '>
                <FloatingLabel controlId="formBasicUsername" label="Username">
                    <Form.Control
                        type="text"
                        name="username"
                        value={userData.username}
                        onChange={handleInputChange}
                        placeholder="Enter username"
                        required
                        style={{ backgroundColor: 'lightgray' }}
                    />
                </FloatingLabel>

                <FloatingLabel controlId="formBasicEmail" label="Email address">
                    <Form.Control
                    className='mt-3'
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                        placeholder="Enter email"
                        required
                        style={{ backgroundColor: 'lightgray' }}
                    />
                </FloatingLabel>

                <FloatingLabel controlId="formBasicPassword" label="Password">
                    <Form.Control
                     className='mt-3'
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleInputChange}
                        placeholder="Password"
                        required
                        style={{ backgroundColor: 'lightgray' }}
                    />
                </FloatingLabel>


                <Button className='mt-3' variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </Container>
    );
};

export default RegisterForm;
