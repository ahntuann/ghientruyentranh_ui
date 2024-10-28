import classNames from 'classnames/bind';

import style from '../../CommentModal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const cs = classNames.bind(style);

function CommentInput({ mangaID, chapterID, finalCommentList, setFinalCommentList }) {
    const navigate = useNavigate();

    const [commentContent, setCommentContent] = useState('');

    async function postComment() {
        try {
            const response = await fetch('http://localhost:8080/testmaven/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: commentContent,
                    chapterID: chapterID,
                    mangaID: mangaID,
                    userID: localStorage.getItem('userID'),
                }),
                credentials: 'include',
            });

            const data = await response.json();

            if (data.success === 'true') {
                const user = JSON.parse(localStorage.getItem('user'));
                console.log(user);
                setFinalCommentList([
                    ...finalCommentList,
                    {
                        ...data.comment,
                        user: user,
                    },
                ]);

                setCommentContent('');
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
            <input
                placeholder="Gửi bình luận"
                name="comment"
                className={cs('comment-input')}
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)}
            />

            <FontAwesomeIcon className={cs('comment-send')} icon={faPaperPlane} onClick={postComment} />
        </div>
    );
}

export default CommentInput;
