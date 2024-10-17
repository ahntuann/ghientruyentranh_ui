import classNames from 'classnames/bind';
import style from './ReadingLayout.module.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import { useCallback, useState } from 'react';
import { Reading } from '~/pages';

const cs = classNames.bind(style);

function ReadingLayout() {
    const [showHeadFoot, setShowHeadFoot] = useState(true);
    const [offset, setOffset] = useState(0);
    const [isFetching, setIsFetching] = useState(false);
    const [isEnding, setIsEnding] = useState(false);

    const limit = 10;

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
                toggleFetching();
                setOffset((prev) => prev + limit);
            }
        },
        [isFetching, isEnding, limit, toggleFetching],
    );

    const handlClick = useCallback(() => {
        setShowHeadFoot(true);
    }, []);

    return (
        <div className={cs('wrapper')} onScroll={handlScroll} onClick={handlClick}>
            {showHeadFoot ? <Header classList={cs({ visible: true })} /> : <Header classList={cs({ hidden: true })} />}

            <div className={cs('content')}>
                {offset !== null ? (
                    <Reading
                        offsetReading={offset}
                        limit={limit}
                        toggleFetching={toggleFetching}
                        toggleEnding={toggleEnding}
                    />
                ) : (
                    <Reading
                        offsetReading={0}
                        limit={limit}
                        toggleFetching={toggleFetching}
                        toggleEnding={toggleEnding}
                    />
                )}
            </div>

            {showHeadFoot ? <Footer classList={cs({ visible: true })} /> : <Footer classList={cs({ hidden: true })} />}
        </div>
    );
}

export default ReadingLayout;
