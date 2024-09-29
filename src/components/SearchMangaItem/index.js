import classNames from 'classnames/bind';
import style from './SearchMangaItem.module.scss';

const cs = classNames.bind(style);

function SearchMangaItem({ manga }) {
    return (
        <div className={cs('wrapper')}>
            <div className={cs('manga-img')}>
                <img src={manga.image} alt={cs('manga-img')} />
            </div>

            <div className={cs('manga-detail')}>
                <div className={cs('manga-name')}>{manga.firstName + ' ' + manga.lastName}</div>

                <div className={cs('manga-chap')}>12 giờ trước</div>

                <div className={cs('manga-type')}>Kiếm hiệp, phiêu lưu, chiến đấu, tu tiên,...</div>
            </div>
        </div>
    );
}

export default SearchMangaItem;
