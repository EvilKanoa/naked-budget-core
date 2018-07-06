import React from 'react';
import TopBar from '../TopBar';
import Sidebar from '../Sidebar';
import AppContainer from '../AppContainer';
import './index.css';

const LOGO_IMAGE = 'logo.png';

const App = () => {
    return (
        <div className='flex-vertical' id='app'>
            <div className='show-grid flex-fixed-child'>
                <div className='remove-col-padding'>
                    <TopBar img={LOGO_IMAGE}/>
                </div>
            </div>
            <div className='show-grid flex-fill-child flex-horizontal'>
                <div className='remove-col-padding sidebar-width flex-fixed-child'>
                    <Sidebar/>
                </div>
                <div className='remove-col-padding flex-fill-child'>
                    <AppContainer/>
                </div>
            </div>
        </div>
    );
};

export default App;
