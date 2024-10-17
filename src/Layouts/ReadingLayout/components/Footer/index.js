import classNames from 'classnames/bind';

import style from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRightLong, faBars, faCommentDots } from '@fortawesome/free-solid-svg-icons';

const cs = classNames.bind(style);

function Footer({ classList }) {
    return (
        <div className={cs('wrapper', classList)}>
            <div className={cs('footer-icon')}>
                <div>
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faArrowRightLong} />
                </div>
            </div>

            <div className={cs('footer-icon-absolute')}>
                <div>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faCommentDots} />
                </div>
            </div>
        </div>
    );
}

export default Footer;
