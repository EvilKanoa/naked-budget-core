import express from 'express';

const prefix = (route) => `/v1${route}`;

export default () => {
    const app = express();
    app.get(prefix('/test'), (req, res) => res.send('API Test'));
    return app;
};