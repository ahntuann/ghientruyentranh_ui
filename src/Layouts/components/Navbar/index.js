import classNames from 'classnames/bind';

import style from './Navbar.module.scss';

const cs = classNames.bind(style);

function Navbar() {
    return <div className={cs('wrapper')}>Navbar</div>;
}

export default Navbar;
