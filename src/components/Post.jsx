import React from 'react';

import '../styles/Post.css';
import MainButton from './UI/button/MainButton';

const Post = (props) => {

    return (
        <div className='post'>

            <div className='post__content'>
                <div className='post__title'>{props.post.id}. {props.post.title}</div>
                <div>
                    {props.post.body}
                </div>
            </div>

            <div className='post__buttons'>
                <MainButton onClick={() => props.remove(props.post)}>Delete</MainButton>
            </div>

        </div>
    );
};

export default Post;