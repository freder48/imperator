import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import './PasswordReset.css';

interface IEmail {
    email: string,
    confirm: string
}

interface SwalOptions {
    title?: string,
    text?: string,
    icon?: string,
}

const PasswordReset: React.FC<SwalOptions> = () => {
    const [email, setEmail] = useState<IEmail>({ email: '', confirm: '' })
    const history = useHistory();
    const dispatch = useDispatch();

    const reset = () => {
        if (email.email === email.confirm) {
            dispatch({ type: 'RESET_PASSWORD', payload: email });
            setEmail({ email: '', confirm: '' });
            Swal.fire({
                title: "Thank you!",
                text: "You will receive an email to reset your password.",
                icon: "success",
            });
        } else {
            Swal.fire({
                title: "Whoops!",
                text: "Please ensure email is accurate",
                icon: "warning",
            });
        }
    }

    const returnToLogin = () => {
        history.push('/login');
    }

    return (
        <div className='resetContainer'>
            <div className="reset">
                <form className='formPanel'>
                    <img src="../img/logo.svg" alt="logo" className="nav-logo2"></img>
                    <h2>Password Reset</h2>
                    <div>
                        <label htmlFor='email'>
                            Email:
                            <input
                                className="loginForm"
                                type='text'
                                name='email'
                                required
                                value={email.email}
                                onChange={(e) => setEmail({ ...email, email: e.target.value })}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor='email'>
                            Confirm Email:
                            <input
                                className="loginForm"
                                type='text'
                                name='confirm'
                                required
                                value={email.confirm}
                                onChange={(e) => setEmail({ ...email, confirm: e.target.value })}
                            />
                        </label>
                    </div>
                    <div className="buttonContainer">
                        <button className='btnReset' onClick={returnToLogin}>Return to Login</button>
                        <button
                            className='btnReset'
                            onClick={reset}
                        >Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PasswordReset;