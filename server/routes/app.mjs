import express from 'express';

export default {
    route: 'app',
    controllers: [
        {
            type: 'use',
            handler: express.static('client/build')
        }
    ]
}