import classNames from 'classnames/bind';

import style from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const cs = classNames.bind(style);

function Header({ classList }) {
    return (
        <div className={cs('wrapper', classList)}>
            <div className={cs('manga-info')}>
                <div className={cs('manga-name')} title="Mao Sơn tróc quỷ nhân chung ta khong thuoc ve nhau">
                    Mao Sơn tróc quỷ nhân chung ta khong thuoc ve nhau
                </div>
                <div className={cs('slicer')}>|</div>
                <div className={cs('manga-chapter')}>Chương 1</div>
            </div>

            <div className={cs('manga-like')}>
                23 <FontAwesomeIcon icon={faHeart} />
            </div>
        </div>
    );
}

export default Header;
