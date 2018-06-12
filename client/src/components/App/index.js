import React from 'react';
import TopBar from '../TopBar';
import Sidebar from '../Sidebar';
import AppContainer from '../AppContainer';
import { Grid, Row, Col } from 'react-bootstrap';
import './index.css';

const App = () => {
    return (
        <div className='app'>
            <Grid fluid={true}>
                <Row className='show-grid'>
                    <Col xs={12}>
                        <TopBar/>
                    </Col>
                </Row>
                <Row className='show-grid'>
                    <Col md={2}>
                        <Sidebar/>
                    </Col>
                    <Col md={10}>
                        <AppContainer/>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

export default App;
