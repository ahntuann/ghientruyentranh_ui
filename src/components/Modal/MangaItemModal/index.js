import classNames from 'classnames/bind';
import ReactDOM from 'react-dom';

import style from './MangaItemModal.module.scss';
import MangaSection from './components/MangaSection';
import ChapterSection from './components/ChapterSection';
import { useEffect, useState } from 'react';

const cs = classNames.bind(style);

function MangaItemModal({ display, manga, toogleModal }) {
    const [chapterList, setChapterList] = useState(() => []);

    const classList = cs('wrapper', {
        hide: !display,
        display: display,
    });

    function handlePropagation(event) {
        event.stopPropagation();
    }

    useEffect(() => {
        async function fetchChapter() {
            console.log(manga);
            const res = await fetch(`http://localhost:8080/testmaven/mangas?id=${manga?.id}&chapters=true`);
            const chapters = await res.json();

            setChapterList(chapters);
        }

        if (manga) fetchChapter();
    }, [manga]);

    return ReactDOM.createPortal(
        <div
            className={classList}
            onClick={() => {
                if (toogleModal.current) toogleModal.current();
            }}
        >
            <div className={cs('container')} onClick={handlePropagation}>
                <div className={cs('manga-section')}>
                    <MangaSection manga={manga} />

                    {manga && <ChapterSection chapterList={chapterList} isModalOpen={display} />}
                </div>
            </div>
        </div>,
        document.body,
    );
}

export default MangaItemModal;
