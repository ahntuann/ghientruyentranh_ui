import classNames from 'classnames/bind';
import style from './LoginResgiterLayout.module.scss';

const cs = classNames.bind(style);

function LoginRegisterLayout({ children }) {
    return (
        <div className={cs('wrapper')}>
            <div className={cs('content')}>{children}</div>
        </div>
    );
}

export default LoginRegisterLayout;
