import classNames from 'classnames/bind';

import style from './Home.module.scss';
import MangaDetail from '~/components/MangaDetail';

const cs = classNames.bind(style);

function Home() {
    return (
        <div className={cs('wrapper')}>
            <div className={cs('background')}>
                <MangaDetail classList={cs('manga-info')} />
            </div>
        </div>
    );
}

export default Home;
