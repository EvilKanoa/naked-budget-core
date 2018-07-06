import React from 'react';
import { connect } from 'react-redux';
import { getPageComponent } from '../../../selectors/app'
import './index.css';

const AppContainer = connect(
    (state) => ({
        page: getPageComponent(state)
    })
)((props) => {
    return (
        <div id='appContainer'>
            {props.page}
        </div>
    )
});

export default AppContainer;