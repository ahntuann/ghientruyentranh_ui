import classNames from 'classnames/bind';

import style from './DefaultLayout.module.scss';
import Header from '~/components/Header';

const cs = classNames.bind(style);

function DefaultLayout({ children }) {
    return (
        <div className={cs('wrapper')}>
            <Header />
            {children}
        </div>
    );
}

export default DefaultLayout;
