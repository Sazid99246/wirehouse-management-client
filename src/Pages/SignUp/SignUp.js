import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [sendEmailVerification] = useSendEmailVerification(auth)
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    
    const handleCreateUser = event => {
        event.preventDefault();
    }
    const handleEmailVerification = async ()=>{
        await sendEmailVerification();
        toast('email sent');
    }
    if (user) {
        signOut(auth);
        handleEmailVerification();
        navigate('/login')
    }
    return (
        <div>
            <h2 className='text-primary text-center'>Please Sign Up</h2>
            <Form onSubmit={handleCreateUser} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name" required
                    />
                </Form.Group>
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
                    onClick={() => createUserWithEmailAndPassword(email, password)}
                    variant="primary"
                    type="submit"
                >
                    Register
                </Button>
                <p>Already a user?
                    <Link to='/login'>Please login</Link>    
                </p>
            </Form>
            <ToastContainer/>
        </div>
    );
};

export default SignUp;