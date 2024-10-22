import classNames from 'classnames/bind';
import style from './Reading.module.scss';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const cs = classNames.bind(style);

function Reading({ offsetReading, limit, toggleFetching, toggleEnding }) {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const [imageURLs, setImageURLs] = useState([]);
    const [mangaId, setMangaId] = useState(params.get('id'));

    useEffect(() => {
        const newMangaId = params.get('id');
        if (newMangaId !== mangaId) {
            setImageURLs([]);
            setMangaId(newMangaId);
        }
    }, [location.search]);

    useEffect(() => {
        let timeoutId;

        async function fetchURL() {
            try {
                toggleFetching();

                const res = await fetch(
                    `http://localhost:8080/testmaven/chapterimages?chapterId=${mangaId}&offset=${offsetReading}&limit=${limit}`,
                );
                const URLs = await res.json();

                if (URLs.length > 0) {
                    setImageURLs((prev) => [...prev, ...URLs]);
                } else {
                    toggleEnding();
                }
            } catch (error) {
                console.error('Error fetching images:', error);
            } finally {
                timeoutId = setTimeout(() => {
                    toggleFetching();
                }, 2000);
            }
        }

        fetchURL();

        return () => {
            clearTimeout(timeoutId);
        };
    }, [offsetReading, limit, toggleEnding, toggleFetching, mangaId]);

    useEffect(() => {
        console.log(imageURLs.length);
    }, [imageURLs]);

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
