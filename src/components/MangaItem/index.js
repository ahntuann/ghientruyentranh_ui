import classNames from 'classnames/bind';

import style from './MangaItem.module.scss';

const cs = classNames.bind(style);

function MangaItem({ displayMangas }) {
    return (
        <div className={cs('wrapper')}>
            {displayMangas.map((manga, index) => (
                <div className={cs('manga-item')} key={index}>
                    <div className={cs('manga-img')}>
                        <img src={manga?.images?.webp?.image_url} alt="" />
                    </div>
                    <div className={cs('manga-name')}>
                        {manga?.titles?.find((title) => title?.type === 'Default')?.title || 'Unknown Title'}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MangaItem;
