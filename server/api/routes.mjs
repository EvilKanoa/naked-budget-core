import express from 'express';

const prefix = (route) => `/v1${route}`;

export default () => {
    const app = express();

    app.get(prefix('/teapot'), (req, res) => res.status(418).send(`I'm a teapot`));
    app.get('/teapot', (req, res) => res.status(418).send(`I'm a teapot`));
    app.get('/', (req, res) => res.json({currentApi: prefix('/')}));

    // setup personal data routes
    app.get(prefix('/personal/:id'), (req, res) => {

    });
    app.post(prefix('/personal'), (req, res) => {

    });
    app.put(prefix('/personal/:id'), (req, res) => {

    });
    app.delete(prefix('/personal/:id'), (req, res) => {

    });

    // setup user data routes
    app.get(prefix('/user/:id'), (req, res) => {

    });
    app.post(prefix('/user'), (req, res) => {

    });
    app.put(prefix('/user/:id'), (req, res) => {

    });
    app.delete(prefix('/user/:id'), (req, res) => {

    });

    return app;
};