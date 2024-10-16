import classNames from 'classnames/bind';
import style from './Button.module.scss';

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

    return (
        <button className={classes} {...props} onClick={onClick?.current}>
            {title}
        </button>
    );
}

export default Button;
