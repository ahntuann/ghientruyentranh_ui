import classNames from 'classnames/bind';
import style from '../../LoginRegister.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const cs = classNames.bind(style);

function SignUp() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [passConfirm, setPassConfirm] = useState('');
    const [code, setCode] = useState('');

    const [isFillEmail, setIsFillEmail] = useState(true);
    const [isFillName, setIsFillName] = useState(true);
    const [isFillPass, setIsFillPass] = useState(true);
    const [isFillPassConfirm, setIsFillPassConfirm] = useState(true);
    const [isFillCode, setIsFillCode] = useState(true);

    async function handleVerify() {
        if (email)
            try {
                alert('Mã xác thực đã được gửi tới email của bạn!');
                const res = await fetch(`http://localhost:8080/testmaven/register?sendCode=true&email=${email}`, {
                    method: 'get',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const data = await res.json();
            } catch (error) {}
        else {
            alert('Vui lòng nhập email để nhận verify code');
        }
    }

    async function handleVerifyForm(e) {
        e.preventDefault();

        setIsFillName(name !== '');
        setIsFillEmail(email !== '');
        setIsFillPass(pass !== '');
        setIsFillPassConfirm(passConfirm !== '');
        setIsFillCode(code !== '');

        if (isFillCode && isFillEmail && isFillName && isFillPass && isFillPassConfirm) {
            try {
                const res = await fetch(`http://localhost:8080/testmaven/register`, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username: name, password: pass, email: email, code: code }),
                });

                const data = await res.json();

                alert(data.message);
            } catch (error) {}
        }
    }

    return (
        <div className={cs('form-container', 'sign-up')}>
            <form>
                <h1>Create Account</h1>

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
                <span>or use your email for registeration</span>
                <input
                    type="text"
                    placeholder="User Name"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        setIsFillName(true);
                    }}
                />
                {!isFillName && <span>Vui lòng nhập user name</span>}

                <input
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setIsFillEmail(true);
                    }}
                />
                {!isFillEmail && <span>Vui lòng nhập email</span>}

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
                {!isFillPass && <span>Vui lòng nhập password</span>}

                <input
                    type="password"
                    placeholder="Confirm password"
                    value={passConfirm}
                    onChange={(e) => {
                        setPassConfirm(e.target.value);
                        setIsFillPassConfirm(true);
                    }}
                />
                {!isFillPassConfirm && <span>Vui lòng nhập xác nhận password</span>}

                <div className={cs('verify-code')}>
                    <input
                        type="code"
                        placeholder="Verify Code"
                        className={cs('verify-input')}
                        value={code}
                        onChange={(e) => {
                            setCode(e.target.value);
                            setIsFillCode(true);
                        }}
                    />
                    <div className={cs('verify-btn')} onClick={handleVerify}>
                        Send code
                    </div>
                </div>
                {!isFillCode && <span>Vui lòng nhập verify code</span>}

                <button onClick={(e) => handleVerifyForm(e)}>Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
