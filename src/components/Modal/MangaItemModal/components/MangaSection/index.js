import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import style from '../../MangaItemModal.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const cs = classNames.bind(style);

function MangaSection({ manga, chapterList }) {
    const [mangaType, setMangaType] = useState(() => ['Tu tiên', 'Trinh thám']);

    console.log(chapterList);

    return (
        <div className={cs('manga-wrapper')}>
            <div className={cs('manga-info')}>
                <div className={cs('manga-img')}>
                    <img src={manga?.coverImageURL} />
                </div>

                <div className={cs('manga-detail')}>
                    <div className={cs('manga-name')}>{manga?.title}</div>

                    <div className={cs('manga-like')}>
                        <FontAwesomeIcon className={cs('like-icon')} icon={faHeart} />
                        {manga?.likeCount}
                    </div>

                    <div className={cs('manga-action')}>
                        <Link
                            className={cs('action-item')}
                            to={`doctruyen?id=${chapterList[0]?.chapterId}&mangaId=${manga?.id}`}
                        >
                            <Button title="Đọc ngay" light />
                        </Link>

                        <Link
                            className={cs('action-item')}
                            to={`doctruyen?id=${chapterList[chapterList.length - 1]?.chapterId}&mangaId=${manga?.id}`}
                        >
                            <Button title="Chương mới nhất" large light />
                        </Link>
                        <Button title="Thích" light />
                    </div>

                    <div className={cs('manga-author')}>
                        Tác giả: <span className={cs('author-content')}>{manga?.author}</span>
                    </div>

                    <div className={cs('manga-type')}>
                        Thể loại: <span className={cs('type-content')}>{mangaType.map((type) => `${type}, `)}</span>
                    </div>

                    <div className={cs('manga-status')}>
                        Tình trạng: <span className={cs('status-content')}>{manga?.status}</span>
                    </div>

                    <div className={cs('manga-desc')}>
                        Mô tả: <span className={cs('desc-content')}>{manga?.desc}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MangaSection;
