import classNames from 'classnames/bind';
import style from './Wrapper.module.scss';

const cs = classNames.bind(style);

function Wrapper({ children }) {
    return <div className={cs('wrapper')}>{children}</div>;
}

export default Wrapper;
