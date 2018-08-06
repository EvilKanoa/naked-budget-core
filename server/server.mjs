import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import _ from 'lodash';

import PassportMiddleware from './middleware/passport.middleware';
import config from './config'
import routes from './routes';

const app = express();

// add passport middleware
_.forEach(PassportMiddleware, (middleware) => passport.use(middleware));

// add express middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// connect to database
mongoose.Promise = global.Promise;
const mongoUri = ({database: {host, port, user, password, database}}) => user ?
    `mongodb://${user}:${password}@${host}:${port}/${database}` :
    `mongodb://${host}:${port}/${database}`;
mongoose.connect(mongoUri(config), {
    useNewUrlParser: true
}).catch((err) =>
    console.log('Failed to connect to database: ', mongoUri(config)) &&
    console.log(err)
);
mongoose.connection.once('open', () =>
    console.log('Connected to database.')
);

// add routes
const routeTypes = ['get', 'put', 'post', 'delete', 'use'];
const addRoute = (route) => {
    _(route.controllers || [])
        .map(({type, uri, handler, middleware}) => ({
            uri,
            type: type.toLowerCase(),
            middleware: handler ?
                [...(_.castArray(middleware || [])), handler] :
                (middleware || [])
        }))
        .filter(({type}) =>
            routeTypes.indexOf(type) > -1
        )
        .forEach(({type, uri, middleware}) => {
            const fullUri = `/${route.route}/${uri || ''}`;
            _.forEach(middleware, (handler) =>
                app[type](fullUri, handler)
            );
            console.log(`${type.toUpperCase()}: ${fullUri}`);
        });
};
console.log('Adding routes...');
_.forEach(routes, addRoute);
app.use(express.static('public'));

app.listen(config.port, () => console.log(`Listening on port ${config.port}`));
