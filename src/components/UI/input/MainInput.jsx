import React from 'react';

import classes from './MainInput.module.css';

const MainInput = (props) => {

    return (
        <input {...props} className={classes.MainInput} />
    );
};

export default MainInput;