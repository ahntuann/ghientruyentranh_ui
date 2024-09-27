import classNames from 'classnames/bind';

import style from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const cs = classNames.bind(style);

function Navbar() {
    return (
        <div className={cs('wrapper')}>
            <ul className={cs('navbar-list')}>
                <li className={cs('navbar-items')}>
                    <Link to="/">Trang chủ</Link>
                </li>
                <li className={cs('navbar-items')}>
                    <Link to="/">Mới cập nhật</Link>
                </li>
                <li className={cs('navbar-items')}>
                    <Link to="/">BXH</Link>
                </li>
                <li className={cs('navbar-items')}>
                    <Link to="/">Thể loại</Link>
                </li>
                <li className={cs('navbar-items')}>
                    <Link to="/">Tin tức</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
