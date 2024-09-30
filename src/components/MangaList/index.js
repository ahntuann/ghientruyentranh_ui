import classNames from 'classnames/bind';
import style from './MangaList.module.scss';
import { useState } from 'react';

import MangaItem from '../MangaItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, faRightLong } from '@fortawesome/free-solid-svg-icons';

const cs = classNames.bind(style);
const numMangaPerUnit = 7;

function MangaList({ mangas, title }) {
    const [start, setStart] = useState(0);
    const numManga = mangas.length;

    const displayMangas = mangas.slice(start, start + numMangaPerUnit);

    function handleIncreManga() {
        setStart((prevStart) => {
            return prevStart + 1 + numMangaPerUnit <= numManga ? prevStart + 1 : 0;
        });
    }

    return (
        <div className={cs('wrapper')}>
            <div className={cs('header')}>
                <div className={cs('title')}>
                    <div className={cs('title-icon')}>|</div>
                    <div className={cs('title-content')}>{title}</div>
                    <FontAwesomeIcon icon={faRightLong} className={cs('title-icon-awesome')} />
                </div>
                <div onClick={handleIncreManga}>
                    <FontAwesomeIcon icon={faCircleArrowRight} className={cs('title-icon-awesome-incre')} />
                </div>
            </div>

            <div className={cs('manga-list')}>
                <MangaItem displayMangas={displayMangas} />
            </div>
        </div>
    );
}

export default MangaList;
