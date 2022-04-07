import React from 'react';
import Post from './Post';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../styles/PostList.css';

const PostList = ({ posts, title, remove }) => {

    if (!posts.length) {
        return (
            <div>No posts...</div>
        );
    }

    return (
        <div>
            <h1>{title}</h1>

            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="PostList__item"
                    >
                        <Post remove={remove} number={index + 1} post={post} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;