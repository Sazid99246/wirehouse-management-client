import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { FcGoogle } from 'react-icons/fc'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth)
    const [signInWithGoogle, user2, loading2] = useSignInWithGoogle(auth)
    const navigate = useNavigate();

    let location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const handleSignIn = event => {
        event.preventDefault();
    }
    const resetPassword = async () => {
        await sendPasswordResetEmail(email);
        toast('Email sent');
    }
    if (user || user2) {
        navigate(from, { replace: true })
    }
    if (loading || loading2){
        return <Spinner animation="border" variant="primary" className='mx-auto my-auto' />
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
                    variant='link'
                    onClick={resetPassword}>
                    Forgot Password?
                </Button>
                <br />
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
            <div className='text-center'>
                <button className='bg-light px-3 py-2 fs-2 rounded-pill' onClick={() => signInWithGoogle()}><FcGoogle />  Login with Google</button>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;