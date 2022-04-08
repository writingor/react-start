import React from "react";
import { Link } from 'react-router-dom';
import classes from './MainNavbar.module.css';

const MainNavbar = () => {
    return (
        <div className={classes.MainNavbar}>
            <Link to='/about' className={classes.MainNavbar__link}>ABOUT</Link>
            <Link to='/posts' className={classes.MainNavbar__link}>POSTS</Link>
        </div>
    );
};

export default MainNavbar;
