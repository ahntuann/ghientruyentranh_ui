import classNames from 'classnames/bind';

import style from '../../CommentModal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const cs = classNames.bind(style);

function CommentInput({ chapterID }) {
    return (
        <div className={cs('input-wapper')}>
            <input placeholder="Gửi bình luận" name="comment" className={cs('comment-input')} />

            <FontAwesomeIcon className={cs('comment-send')} icon={faPaperPlane} />
        </div>
    );
}

export default CommentInput;
