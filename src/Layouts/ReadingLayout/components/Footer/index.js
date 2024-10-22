import classNames from 'classnames/bind';

import style from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRightLong, faBars, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const cs = classNames.bind(style);

function Footer({ classList, chapterID, mangaID, chapterList, chapter }) {
    const location = useLocation();
    const navigate = useNavigate();

    const [displayPrev, setDisplayPrev] = useState(true);
    const [displayNext, setDisplayNext] = useState(true);

    function handlePrev(event) {
        event.preventDefault();

        mangaID = parseInt(mangaID, 10);
        chapter.chapterNumber = parseInt(chapter.chapterNumber, 10);
        chapterID = parseInt(chapterID, 10);

        chapter.chapterNumber = chapter.chapterNumber - 1;

        chapterID -= 1;

        navigate(`/doctruyen?id=${chapterID}&mangaId=${mangaID}&chapterNumber=${chapter?.chapterNumber}`);
    }

    function handleNext(event) {
        event.preventDefault();

        mangaID = parseInt(mangaID, 10);
        chapter.chapterNumber = parseInt(chapter.chapterNumber, 10);
        chapterID = parseInt(chapterID, 10);

        chapter.chapterNumber = chapter.chapterNumber + 1;

        chapterID += 1;

        navigate(`/doctruyen?id=${chapterID}&mangaId=${mangaID}&chapterNumber=${chapter?.chapterNumber}`);
    }

    useEffect(() => {
        console.log(chapterList);
        console.log(chapterList.at(0).chapterId, chapterID);
        if (chapterID == chapterList.at(0).chapterId) setDisplayPrev((prev) => false);
        else setDisplayPrev((prev) => true);

        if (chapterID == chapterList.at(chapterList.length - 1).chapterId) setDisplayNext((prev) => false);
        else setDisplayNext((prev) => true);
    }, [chapterList, location.search]);

    return (
        <div className={cs('wrapper', classList)}>
            <div className={cs('footer-icon')}>
                {displayPrev && (
                    <Link className={cs('prev-after')} onClick={(event) => handlePrev(event)}>
                        <FontAwesomeIcon icon={faArrowLeftLong} />
                    </Link>
                )}

                {displayNext && (
                    <Link className={cs('prev-after')} onClick={(event) => handleNext(event)}>
                        <FontAwesomeIcon icon={faArrowRightLong} />
                    </Link>
                )}
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
