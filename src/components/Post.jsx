import React from 'react';
import {useNavigate} from 'react-router-dom';

import '../styles/Post.css';
import MainButton from './UI/button/MainButton';

const Post = (props) => {

    const navigate = useNavigate();

    return (
        <div className='post'>

            <div className='post__content'>
                <div className='post__title'>{props.post.id}. {props.post.title}</div>
                <div>
                    {props.post.body}
                </div>
            </div>

            <div className='post__buttons'>
                <MainButton onClick={() => navigate(`/posts/${props.post.id}`)}>Open</MainButton>
                <MainButton onClick={() => props.remove(props.post)}>Delete</MainButton>
            </div>

        </div>
    );
};

export default Post;