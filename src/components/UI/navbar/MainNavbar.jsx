import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import MainButton from "../button/MainButton";
import { AuthContext } from "../../context";
import classes from './MainNavbar.module.css';

const MainNavbar = () => {
    
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div className={classes.MainNavbar}>
            <Link to='/about' className={classes.MainNavbar__link}>ABOUT</Link>
            <Link to='/posts' className={classes.MainNavbar__link}>POSTS</Link>
            <MainButton
                onClick={logout}
            >
                Exit
            </MainButton>
        </div>
    );
};

export default MainNavbar;
