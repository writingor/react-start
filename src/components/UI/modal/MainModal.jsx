import React from 'react';

import classes from './MainModal.module.css';

const MainModal = ({children, visible, setVisible}) => {

    const rootClasses = [classes.MainModal]

    if (visible) {
        rootClasses.push(classes.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.MainModal__content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MainModal;