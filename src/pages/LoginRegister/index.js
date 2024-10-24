import classNames from 'classnames/bind';
import style from './LoginRegister.module.scss';

import { useCallback, useState } from 'react';
import { ToggleContainer, SignIn, SignUp } from './components';

const cs = classNames.bind(style);

function LoginRegister() {
    const [active, setActive] = useState(false);

    const toggleActive = useCallback(() => {
        setActive((prev) => !prev);
    }, []);

    return (
        <div className={cs('wrapper', { active })}>
            <SignUp />

            <SignIn />

            <ToggleContainer toggleActive={toggleActive} />
        </div>
    );
}

export default LoginRegister;
