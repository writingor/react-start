import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/context";
import MainButton from "../components/UI/button/MainButton";
import MainInput from "../components/UI/input/MainInput";

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
                <MainInput
                    type={'text'}
                    placeholder={'login'}
                // value={''}
                // onChange={''}
                />

                <MainInput
                    type={'password'}
                    placeholder={'password'}
                // value={''}
                // onChange={''}
                />

                <MainButton>Submit</MainButton>

            </form>
        </div>
    );
};

export default Login;
