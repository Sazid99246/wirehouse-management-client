import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleLogin from './GoogleLogIn/GoogleLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleSignIn = event => {
        event.preventDefault();
    }
    if (user) {
        navigate('/')
    }
    if(!user){
        navigate('/login')
    }
    return (
        <div>
            <h2 className='text-primary text-center'>Please Login</h2>
            <Form onSubmit={handleSignIn} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                </Form.Group>
                <Button
                    onClick={() => signInWithEmailAndPassword(email, password)}
                    variant="primary"
                    type="submit"
                >
                    Login
                </Button>
                <p>Don't have an account?
                    <Link to='/signup'>Please register</Link>
                </p>
            </Form>
            <p className='text-center'>or</p>
            <GoogleLogin/>
        </div>
    );
};

export default Login;