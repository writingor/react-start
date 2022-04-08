import React, { useContext } from "react";
import About from '../pages/About';
import Page404 from '../pages/Page404';
import Posts from '../pages/Posts';
import { Route, Routes, Navigate } from 'react-router-dom';
import PostPage from "../pages/PostPage";
import Login from "../pages/Login";
import { AuthContext } from "./context";
import MainLoader from "./UI/loader/MainLoader";

const AppRouter = () => {

    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <MainLoader />
    }

    return (
        isAuth
            ?
            <Routes>
                <Route exact path="/posts" element={<Posts />} />
                <Route exact path="/posts/:id" element={<PostPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/404" element={<Page404 />} />
                <Route path="*" element={<Navigate replace to="/posts" />} />
            </Routes>
            :
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/404" element={<Page404 />} />
                <Route path="*" element={<Navigate replace to="/login" />} />
            </Routes>
    );
};

export default AppRouter;
