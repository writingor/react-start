import React from 'react';
import Post from './Post';

import '../styles/Post.css';

const PostList = ({posts, title, remove}) => {

    return (
        <div>
            <h1>{title}</h1>

            {posts.map((post, index) =>
                <Post remove={remove} number={index + 1} post={post} key={post.id} />
            )}
        </div>
    );
};

export default PostList;