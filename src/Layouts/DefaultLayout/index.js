import classNames from 'classnames/bind';

import style from './DefaultLayout.module.scss';
import Navbar from '../components/Navbar';

const cs = classNames.bind(style);

function DefaultLayout({ children }) {
    return (
        <div className={cs('wrapper')}>
            <Navbar />
            {children}
        </div>
    );
}

export default DefaultLayout;
