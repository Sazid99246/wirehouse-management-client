import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import {FcGoogle} from 'react-icons/fc'
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)

    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    if (user) {
        navigate(from, {replace: true})
    }
    return (
        <div className='text-center'>
            <button className='bg-light px-3 py-2 fs-2 rounded-pill' onClick={() => signInWithGoogle()}><FcGoogle />  Login with Google</button>
        </div>
    );
};

export default GoogleLogin;