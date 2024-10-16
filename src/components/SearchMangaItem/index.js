import classNames from 'classnames/bind';
import style from './SearchMangaItem.module.scss';

const cs = classNames.bind(style);

function SearchMangaItem({ manga, onclick }) {
    return (
        <div className={cs('wrapper')} onClick={() => onclick.current(manga)}>
            <div className={cs('manga-img')}>
                <img src={manga.coverImageURL} alt={cs('manga-img')} />
            </div>

            <div className={cs('manga-detail')}>
                <div className={cs('manga-name')}>{manga.title}</div>

                <div className={cs('manga-chap')}>12 giờ trước</div>

                <div className={cs('manga-type')}>Like: {manga.likeCount}</div>
            </div>
        </div>
    );
}

export default SearchMangaItem;
