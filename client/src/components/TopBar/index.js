import React from 'react';
import './index.css'

const TopBar = (props) => {
    return (
        <div id='topBar'>
            <img
                src={`img/${props.img}`}
                alt='NakedBudget'
            />
        </div>
    )
};

export default TopBar;