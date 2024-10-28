import classNames from 'classnames/bind';
import style from '../../LoginRegister.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cs = classNames.bind(style);

function SignIn() {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    const [isFillName, setIsFillName] = useState(true);
    const [isFillPass, setIsFillPass] = useState(true);

    const navigate = useNavigate();

    async function handleVerifyForm(e) {
        e.preventDefault();

        setIsFillName(name !== '');
        setIsFillPass(pass !== '');

        if (name !== '' && pass !== '')
            try {
                const res = await fetch(`http://localhost:8080/testmaven/login`, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: JSON.stringify({
                        name: name,
                        password: pass,
                    }),
                    credentials: 'include',
                });

                const result = await res.json();

                if (result.success) {
                    localStorage.setItem('isLogIn', true);
                    localStorage.setItem('userID', result.user['user_id']);
                    localStorage.setItem('role', result.role);
                    localStorage.setItem('user', JSON.stringify(result.user));

                    navigate('/');
                }
            } catch (error) {}
    }

    return (
        <div className={cs('form-container', 'sign-in')}>
            <form>
                <h1>Sign In</h1>

                <div className={cs('social-icon')}>
                    <a href="#" className={cs('icon')}>
                        <FontAwesomeIcon icon={faGooglePlusG} />
                    </a>
                    <a href="#" className={cs('icon')}>
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="#" className={cs('icon')}>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="#" className={cs('icon')}>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </div>
                <span>or use your email password</span>
                <input
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        setIsFillName(true);
                    }}
                />
                {!isFillName && <span>Vui lòng nhập user name hoặc email của bạn.</span>}

                <input
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    value={pass}
                    onChange={(e) => {
                        setPass(e.target.value);
                        setIsFillPass(true);
                    }}
                />
                {!isFillPass && <span>Vui lòng nhập mật khẩu.</span>}

                <a href="#">Forget your password?</a>
                <button onClick={(e) => handleVerifyForm(e)}>Sign In</button>
            </form>
        </div>
    );
}

export default SignIn;
