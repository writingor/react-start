import React from 'react';
import classes from './MainPagination.module.css';
import { getPagesArray } from '../../../utils/pages';

const MainPagination = ({ totalPages, page, changePage }) => {

    let pagesArray = getPagesArray(totalPages);


    return (
        <div className={classes.MainPagination}>
            {pagesArray.map(p =>
                <div
                    key={p}
                    onClick={() => changePage(p)}
                    className={page === p ? classes.MainPagination__page_current : classes.MainPagination__page}
                >
                    {p}
                </div>
            )}
        </div>
    );
};

export default MainPagination;