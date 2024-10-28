import classNames from 'classnames/bind';
import style from './ReadingLayout.module.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Reading } from '~/pages';
import { useLocation } from 'react-router-dom';
import { CommentModal, MangaItemModal } from '~/components/Modal';

const cs = classNames.bind(style);

function ReadingLayout() {
    const [showHeadFoot, setShowHeadFoot] = useState(true);
    const [offset, setOffset] = useState(0);
    const [isFetching, setIsFetching] = useState(false);
    const [isEnding, setIsEnding] = useState(false);
    const [chapterNumber, setChapterNumber] = useState(null);
    const [manga, setManga] = useState(null);
    const [chapterList, setChapterList] = useState([]);
    const [limit] = useState(10);
    const [displayModal, setDisplayModal] = useState(false);
    const [displayComment, setDisplayComment] = useState(false);

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const mangaID = params.get('mangaId');
    const id = params.get('id');

    useEffect(() => {
        console.log('alo1');
        async function fetchChapter() {
            const res = await fetch(`http://localhost:8080/testmaven/chapters?id=${id}`);
            const chapterNumber = await res.json();

            setChapterNumber(chapterNumber);
        }

        fetchChapter();
    }, [id]);

    useEffect(() => {
        console.log('alo2');
        async function fetchManga() {
            const res = await fetch(`http://localhost:8080/testmaven/mangas?id=${mangaID}`);
            const manga = await res.json();

            setManga(manga);
        }

        fetchManga();
    }, [mangaID]);

    useEffect(() => {
        console.log('alo3');
        async function fetchManga() {
            const res = await fetch(`http://localhost:8080/testmaven/mangas?id=${mangaID}&chapters=true`);
            const chapterList = await res.json();

            setChapterList(chapterList);
        }

        fetchManga();
    }, [mangaID]);

    useEffect(() => {
        console.log('alo4');
        setOffset(0);
        setIsEnding((prev) => false);
        setIsFetching((prev) => false);

        // Cuộn trang lên đầu khi đổi chapter
        window.scrollTo(0, 0);
    }, [location.search]);

    const toggleFetching = useCallback(() => {
        setIsFetching((prev) => !prev);
    }, []);

    const toggleEnding = useCallback(() => {
        setIsEnding((prev) => !prev);
    }, []);

    const handlScroll = useCallback(
        (e) => {
            setShowHeadFoot(false);

            const { scrollTop, scrollHeight, clientHeight } = e.target;

            if (!isFetching && !isEnding && scrollTop + clientHeight >= 0.7 * scrollHeight) {
                setOffset((prev) => prev + limit);
            }
        },
        [isFetching, isEnding, limit, toggleFetching],
    );

    const handlClick = useCallback(() => {
        setShowHeadFoot(true);
    }, []);

    const toggleModal = useCallback(() => {
        setDisplayModal((prev) => !prev);
    }, []);

    const toggleComment = useCallback(() => {
        setDisplayComment((prev) => {
            return !prev;
        });
        setShowHeadFoot((prev) => {
            return !prev;
        });
    }, []);

    const closeModalComment = useCallback(() => {
        setDisplayComment((prev) => false);
    }, []);

    const toggleRef = useRef();
    const toggleCommentRef = useRef();
    const closeCommentRef = useRef();

    toggleRef.current = toggleModal;
    toggleCommentRef.current = toggleComment;
    closeCommentRef.current = closeModalComment;

    return (
        <div className={cs('wrapper')} onScroll={handlScroll} onClick={handlClick}>
            {chapterNumber !== null && manga !== null ? (
                showHeadFoot ? (
                    <Header
                        toggleModal={toggleRef}
                        chapter={chapterNumber}
                        manga={manga}
                        classList={cs({ visible: true })}
                    />
                ) : (
                    <Header
                        toggleModal={toggleRef}
                        chapter={chapterNumber}
                        manga={manga}
                        classList={cs({ hidden: true })}
                    />
                )
            ) : null}

            <div className={cs('content')}>
                <Reading
                    offsetReading={offset}
                    limit={limit}
                    toggleFetching={toggleFetching}
                    toggleEnding={toggleEnding}
                />
            </div>

            {chapterNumber !== null && chapterList.length > 0 && mangaID ? (
                showHeadFoot ? (
                    <Footer
                        mangaID={mangaID}
                        chapterID={id}
                        chapter={chapterNumber}
                        chapterList={chapterList}
                        classList={cs({ visible: true })}
                        toggleComment={toggleCommentRef}
                        displayComment={displayComment}
                    />
                ) : (
                    <Footer
                        mangaID={mangaID}
                        chapterID={id}
                        chapter={chapterNumber}
                        chapterList={chapterList}
                        classList={cs({ hidden: true })}
                        toggleComment={toggleCommentRef}
                        displayComment={displayComment}
                    />
                )
            ) : null}

            <MangaItemModal display={displayModal} manga={manga} toogleModal={toggleRef} />

            <CommentModal
                mangaID={mangaID}
                chapterID={id}
                closeModal={closeCommentRef}
                ontopParent={showHeadFoot}
                display={displayComment}
                hide={!displayComment}
            />
        </div>
    );
}

export default ReadingLayout;
