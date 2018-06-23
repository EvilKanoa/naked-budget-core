import React from 'react';
import TopBar from '../TopBar';
import Sidebar from '../Sidebar';
import AppContainer from '../AppContainer';
import { Grid, Row, Col } from 'react-bootstrap';
import './index.css';

const LOGO_IMAGE = 'logo.png';

const App = () => {
    return (
        <div id='app'>
            <Grid fluid={true}>
                <Row className='show-grid'>
                    <Col xs={12} className='remove-col-padding'>
                        <TopBar img={LOGO_IMAGE}/>
                    </Col>
                </Row>
                <Row className='show-grid full-height'>
                    <Col md={1} className='remove-col-padding full-height sidebar-width'>
                        <Sidebar/>
                    </Col>
                    <Col className='remove-col-padding full-height'>
                        <AppContainer/>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

export default App;
