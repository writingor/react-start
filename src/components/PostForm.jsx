import React, { useState } from 'react';
import MainButton from './UI/button/MainButton';
import MainInput from './UI/input/MainInput';

import '../styles/PostForm.css';

const PostForm = ({create}) => {

    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        };
        create(newPost);
        setPost({ title: '', body: '' });
    }

    return (

        <form className='PostForm'>

            <MainInput
                type={'text'}
                placeholder={'post name'}
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
            />

            <MainInput
                type={'text'}
                placeholder={'post description'}
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
            />

            <MainButton onClick={addNewPost}>Create post</MainButton>

        </form>

    );
};

export default PostForm;