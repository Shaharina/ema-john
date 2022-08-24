import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    };

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>

                <form>
                    <div className='input-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' id='' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' id='' required />
                    </div>
                    <input className='form-submit' type='submit' value='Login' />
                </form>
                <p>
                    New to Ema-John?{' '}
                    <Link className='form-link' to='/signup'>
                        {' '}
                        Create a new account
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
