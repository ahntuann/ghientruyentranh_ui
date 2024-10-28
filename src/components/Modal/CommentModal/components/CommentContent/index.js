import classNames from 'classnames/bind';

import { useEffect } from 'react';

import style from '../../CommentModal.module.scss';
import defaultAvatar from '~/components/img/avt_default.jpg';

const cs = classNames.bind(style);

function CommentContent({ chapterID, commentList, setCommentList, finalCommentList, setFinalCommentList }) {
    useEffect(() => {
        async function fetchComment() {
            const res = await fetch(`http://localhost:8080/testmaven/comments?chapterID=${chapterID}`);
            const comments = await res.json();
            setCommentList(comments);
        }

        fetchComment();
    }, [chapterID]);

    useEffect(() => {
        const userIDs = commentList.map((comment) => comment.userId);
        const userIDsNoDup = [...new Set(userIDs)];

        async function fetchUsers() {
            const res = await fetch('http://localhost:8080/testmaven/users', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userIDsNoDup),
            });

            const users = await res.json();

            const newCommentList = commentList.map((comment) => {
                const user = users.find((user) => user.user_id === comment.userId);

                return { ...comment, user };
            });

            setFinalCommentList(newCommentList);
        }

        try {
            fetchUsers();
        } catch (error) {}
    }, [commentList]);

    useEffect(() => {
        console.log(finalCommentList);
    }, [finalCommentList]);

    return (
        <div className={cs('content-wrapper')}>
            {finalCommentList.map((comment) => (
                <div key={comment.id} className={cs('comment-item')}>
                    <div className={cs('user')}>
                        <img
                            src={comment.user.avatar ? comment.user.avatar : defaultAvatar}
                            className={cs('user-avt')}
                        ></img>
                    </div>

                    <div className={cs('comment-content')}>
                        <div className={cs('user-name')}>{comment.user.username}</div>
                        <div className={cs('content-detail')}>{comment.content}</div>
                    </div>

                    <div className={cs('slicer')}></div>
                </div>
            ))}
        </div>
    );
}

export default CommentContent;
