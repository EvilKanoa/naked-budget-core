import express from 'express';

export default () => {
    const app = express();

    app.get('/teapot', (req, res) => res.status(418).send(`I'm a teapot`));

    // setup personal data routes
    app.get('/v1/personal/:id', (req, res) => {

    });
    app.post('/v1/personal', (req, res) => {

    });
    app.put('/v1/personal/:id', (req, res) => {

    });
    app.delete('/v1/personal/:id', (req, res) => {

    });

    // setup user data routes
    app.get('/v1/user/:id', (req, res) => {

    });
    app.post('/v1/user', (req, res) => {

    });
    app.put('/v1/user/:id', (req, res) => {

    });
    app.delete('/v1/user/:id', (req, res) => {

    });

    return app;
};