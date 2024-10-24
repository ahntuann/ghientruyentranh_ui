import classNames from 'classnames/bind';

import style from './MangaItem.module.scss';
import { MangaItemModal } from '../Modal';
import { useCallback, useEffect, useRef, useState } from 'react';

const cs = classNames.bind(style);

function MangaItem({ displayMangas }) {
    const [mangaModal, setMangaModal] = useState(() => null);
    const [displayModal, setDisplayModal] = useState(() => false);

    const toggleDisplaModal = useCallback(() => {
        setDisplayModal((prev) => !prev);
    }, []);

    const toggleRef = useRef();

    useEffect(() => {
        toggleRef.current = toggleDisplaModal;
    }, [toggleDisplaModal]);

    return (
        <div className={cs('wrapper')}>
            <div className={cs('manga-items')}>
                {displayMangas.map((manga, index) => (
                    <div
                        onClick={() => {
                            toggleDisplaModal();
                            setMangaModal(manga);
                        }}
                        className={cs('manga-item')}
                        key={index}
                    >
                        <div className={cs('manga-img')}>
                            <img src={manga?.coverImageURL} alt="" />
                        </div>
                        <div className={cs('manga-name')}>{manga.title || 'Unknown Title'}</div>
                    </div>
                ))}
            </div>

            <MangaItemModal display={displayModal} manga={mangaModal} toogleModal={toggleRef} />
        </div>
    );
}

export default MangaItem;
