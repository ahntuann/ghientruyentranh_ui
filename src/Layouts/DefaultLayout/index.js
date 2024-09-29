import classNames from 'classnames/bind';

import style from './DefaultLayout.module.scss';
import Header from '~/components/Header';

const cs = classNames.bind(style);

function DefaultLayout({ children }) {
    return (
        <div className={cs('wrapper')}>
            <div className={cs('container')}>
                <Header />

                <div className={cs('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
