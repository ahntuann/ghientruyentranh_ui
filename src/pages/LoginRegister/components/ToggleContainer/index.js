import classNames from 'classnames/bind';
import style from '../../LoginRegister.module.scss';

const cs = classNames.bind(style);

function ToggleContainer({ toggleActive }) {
    return (
        <div className={cs('toggle-container')}>
            <div className={cs('toggle')}>
                <div className={cs('toggle-panel', 'toggle-left')}>
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details to have fun with manga.</p>
                    <button className={cs('hidden')} id="login" onClick={toggleActive}>
                        Sign In
                    </button>
                </div>

                <div className={cs('toggle-panel', 'toggle-right')}>
                    <h1>Hello, friend!</h1>
                    <p>Register with your personal details to have fun with manga.</p>
                    <button className={cs('hidden')} id="register" onClick={toggleActive}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ToggleContainer;
