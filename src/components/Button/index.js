import classNames from 'classnames/bind';
import style from './Button.module.scss';
import { Link } from 'react-router-dom';

const cs = classNames.bind(style);

function Button({ className, title, large, outline, solid, dark, light, to, href, onClick }) {
    const classes = cs('wrapper', {
        [className]: className,
        large,
        outline,
        solid,
        dark,
        light,
    });
    const props = {
        to,
        href,
        onClick,
    };

    let But = 'button';
    if (to) {
        But = Link;
    } else if (href) {
        But = 'a';
    }

    return (
        <But className={classes} {...props}>
            {title}
        </But>
    );
}

export default Button;
