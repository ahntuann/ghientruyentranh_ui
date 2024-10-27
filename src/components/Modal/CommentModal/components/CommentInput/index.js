import classNames from 'classnames/bind';

import style from '../../CommentModal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const cs = classNames.bind(style);

function CommentInput({ chapterID }) {
    const navigate = useNavigate();
    async function postComment(commentText) {
        try {
            const response = await fetch('http://localhost:8080/testmaven/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(''),
                credentials: 'include',
            });

            const data = await response.json();

            if (data.success === 'true') {
                console.log('Comment posted successfully!');
            } else {
                console.error('Error:', data.message);
                navigate('/login');
            }
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    }

    return (
        <div className={cs('input-wapper')}>
            <input placeholder="Gửi bình luận" name="comment" className={cs('comment-input')} />

            <FontAwesomeIcon className={cs('comment-send')} icon={faPaperPlane} onClick={postComment} />
        </div>
    );
}

export default CommentInput;
