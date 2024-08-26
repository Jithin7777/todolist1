import React, { useState } from 'react'
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap'
import { userLogin } from '../service/allapi';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    const navigate=useNavigate()

    const handleInputChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await userLogin(loginData);
            alert('Login successful:', response);
            navigate('/taskmanager')
            // Optionally, redirect to another page or show a success message
        } catch (error) {
            alert('Login failed:', error.message);
        }
    };

  return (
    <div>
 <Container className="w-50 mt-5">
            <h1 className="text-center mt-5">User Login</h1>
            <Form onSubmit={handleFormSubmit}>
                <FloatingLabel controlId="formBasicEmail" label="Email address" className="mb-3 mt-5">
                    <Form.Control
                        type="email"
                        name="email"
                        value={loginData.email}
                        onChange={handleInputChange}
                        placeholder="Enter email"
                        required
                        style={{ backgroundColor: 'lightgray' }}
                    />
                </FloatingLabel>

                <FloatingLabel controlId="formBasicPassword" label="Password" className="mb-3">
                    <Form.Control
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleInputChange}
                        placeholder="Password"
                        required
                        style={{ backgroundColor: 'lightgray' }}
                    />
                </FloatingLabel>

                <Button variant="primary" type="submit" className="mt-3">
                    Login
                </Button>
            </Form>
        </Container>       
         </div>
  )
}

export default Login
