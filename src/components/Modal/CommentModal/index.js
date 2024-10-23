import classNames from 'classnames/bind';

import style from './CommentModal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import CommentContent from './components/CommentContent';
import CommentInput from './components/CommentInput';

const cs = classNames.bind(style);

function CommentModal({ chapterID, closeModal, hide, display, ontopParent }) {
    const classList = cs('wrapper', { ontopParent, hide, display });

    return (
        <div className={classList}>
            <div className={cs('header')}>
                <div className={cs('header-content')}>Bình luận</div>

                <div className={cs('close-modal')} onClick={closeModal.current}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
            </div>

            <CommentContent chapterID={chapterID} />

            <CommentInput chapterID={chapterID} />
        </div>
    );
}

export default CommentModal;
