import React from 'react';

// import classes from './MainSelect.module.css';

const MainSelect = ({ options, defaultValue, value, onChange }) => {

    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value={""}>{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MainSelect;