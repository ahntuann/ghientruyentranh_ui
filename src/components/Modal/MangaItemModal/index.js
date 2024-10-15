import classNames from 'classnames/bind';

import style from './MangaItemModal.module.scss';
import MangaSection from './components/MangaSection';

const cs = classNames.bind(style);

function MangaItemModal({ display, manga, toogleModal }) {
    const classList = cs('wrapper', {
        hide: !display,
        display: display,
    });

    function handlePropagation(event) {
        event.stopPropagation();
    }

    return (
        <div
            className={classList}
            onClick={() => {
                if (toogleModal.current) toogleModal.current();
            }}
        >
            <div className={cs('container')} onClick={handlePropagation}>
                <div className={cs('manga-section')}>
                    <MangaSection manga={manga} />
                </div>
            </div>
        </div>
    );
}

export default MangaItemModal;
