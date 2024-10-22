import classNames from 'classnames/bind';

import style from './Home.module.scss';
import MangaDetail from '~/components/MangaDetail';
import MangaList from '~/components/MangaList';
import { useEffect, useState } from 'react';
import LoginGmail from '~/components/LoginGmail';

const cs = classNames.bind(style);

function Home() {
    const [mangas, setMangas] = useState(() => []);

    console.log(mangas);

    useEffect(() => {
        async function fetchManga() {
            const res = await fetch('http://localhost:8080/testmaven/mangas');
            const manga = await res.json();

            setMangas(manga);
        }

        fetchManga();
    }, []);

    return (
        <div className={cs('wrapper')}>
            <div className={cs('background')}>
                <MangaDetail classList={cs('manga-info')} />
            </div>

            <LoginGmail />

            {mangas && (
                <div className={cs('manga-list')}>
                    <MangaList mangas={mangas} title={'Được chọn cho bạn'} />
                </div>
            )}

            {mangas && (
                <div className={cs('manga-list')}>
                    <MangaList mangas={mangas} title={'Danh sách tiếp tục'} />
                </div>
            )}

            {mangas && (
                <div className={cs('manga-list')}>
                    <MangaList mangas={mangas} title={'Truyện hot trong tuần'} />
                </div>
            )}
            {mangas && (
                <div className={cs('manga-list')}>
                    <MangaList mangas={mangas} title={'Tu tiên, kiếm hiệp'} />
                </div>
            )}

            {mangas && (
                <div className={cs('manga-list')}>
                    <MangaList mangas={mangas} title={'Phiêu lưu'} />
                </div>
            )}
        </div>
    );
}

export default Home;
