import classNames from 'classnames/bind';
import style from '../../LoginRegister.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const cs = classNames.bind(style);

function SignIn() {
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
                <input type="email" placeholder="Email" autoComplete="email" />
                <input type="password" placeholder="Password" autoComplete="current-password" />
                <a href="#">Forget your password?</a>
                <button>Sign In</button>
            </form>
        </div>
    );
}

export default SignIn;
