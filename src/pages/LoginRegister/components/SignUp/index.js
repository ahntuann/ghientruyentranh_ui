import classNames from 'classnames/bind';
import style from '../../LoginRegister.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const cs = classNames.bind(style);

function SignUp() {
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
                <input type="text" placeholder="Name" autoComplete="name" />
                <input type="email" placeholder="Email" autoComplete="email" />
                <input type="password" placeholder="Password" autoComplete="current-password" />
                <button>Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
