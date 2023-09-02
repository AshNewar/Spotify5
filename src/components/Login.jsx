import React, { useEffect, useState } from 'react';
import { auth, provider } from "./config.js";
import { signInWithPopup } from 'firebase/auth';
// import Home from '../Home/Home.jsx';
import Discover from '../pages/Discover.jsx';
import { useNavigate } from 'react-router-dom';
import "./Login.css";
const Login = () => {

    const [value, setValue] = useState('');
    const navigate = useNavigate();
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email);
            localStorage.setItem('userEmail', data.user.email);

        })

    }

    useEffect(() => {
        setValue(localStorage.getItem('userEmail'));
    })

    return (
        <div className='login'>
            <div>
                <h1 className='login-text'>Login</h1>
                {value ? navigate("/questions") :
                    <button onClick={handleClick} className='login-button'>Sign In To Google</button>
                }

            </div>

        </div>
    )
}

export default Login;
