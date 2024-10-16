import classNames from 'classnames/bind';
import style from '../../MangaItemModal.module.scss';
import { useEffect, useRef, useState } from 'react';
import Button from '~/components/Button';

const cs = classNames.bind(style);

function ChapterSection({ chapterList, isModalOpen }) {
    const [firstList, setFirstList] = useState([]);
    const [secondList, setSecondList] = useState([]);

    const [showSecondList, setShowSecondList] = useState(false);
    const [showMoreBtn, setShowMoreBtn] = useState(true);

    const handleShowMoreRef = useRef();

    function handleShowMore() {
        setShowMoreBtn(false);
        setShowSecondList(true);
    }

    useEffect(() => {
        const reversedChapterList = [...chapterList].reverse();
        const n = Math.min(reversedChapterList.length, 10);

        if (n > 10) setFirstList(reversedChapterList.slice(0, n - 1));
        else setFirstList(reversedChapterList.slice(0, n));

        setSecondList(reversedChapterList.slice(n));

        handleShowMoreRef.current = handleShowMore;
    }, [chapterList]);

    useEffect(() => {
        if (isModalOpen) {
            setShowSecondList(false);

            if (chapterList.length > 10) setShowMoreBtn(true);
            else setShowMoreBtn(false);
        }
    }, [isModalOpen, chapterList]);

    return (
        <div className={cs('chapter-wrapper')}>
            <div className={cs('chapter-header')}>Chương</div>

            <div className={cs('chapter-list')}>
                {firstList.length > 0 &&
                    firstList.map((chapter, index) => (
                        <div key={index} className={cs('chapter-item')}>
                            Chương {chapter?.chapterNumber}
                        </div>
                    ))}

                {secondList.length > 0 &&
                    showSecondList &&
                    secondList.map((chapter, index) => (
                        <div key={index} className={cs('chapter-item')}>
                            Chương {chapter?.chapterNumber}
                        </div>
                    ))}
            </div>

            {showMoreBtn && (
                <Button onClick={handleShowMoreRef} title="Show more" light className={cs('showmore-btn')} />
            )}
        </div>
    );
}

export default ChapterSection;
