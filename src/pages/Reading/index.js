import classNames from 'classnames/bind';
import style from './Reading.module.scss';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const cs = classNames.bind(style);

function Reading({ offsetReading, limit, toggleFetching, toggleEnding }) {
    const [imageURLs, setImageURLs] = useState(() => []);

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const mangaId = params.get('id');

    useEffect(() => {
        let timeoutId;

        async function fetchURL() {
            const res = await fetch(
                `http://localhost:8080/testmaven/chapterimages?chapterId=${mangaId}&offset=${offsetReading}&limit=${limit}`,
            );
            const URLs = await res.json();

            setImageURLs((prev) => [...prev, ...URLs]);

            timeoutId = setTimeout(() => {
                if (URLs.length === 0) toggleEnding();
                toggleFetching();
            }, 1000);
        }

        fetchURL();

        return () => {
            clearTimeout(timeoutId);
        };
    }, [offsetReading, limit, toggleEnding, toggleFetching]);

    return (
        <div className={cs('wrapper')}>
            <div className={cs('content')}>
                {imageURLs.map((imageURL, index) => {
                    return (
                        <div className={cs('page-chapter')} key={index}>
                            <img src={imageURL} alt={`Page ${index}`} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Reading;
