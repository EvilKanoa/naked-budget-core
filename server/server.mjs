import express from 'express';
import bodyParser from 'body-parser';
import _ from 'lodash';

import routes from './routes';

const app = express();
const port = process.env.PORT || 3001;

// add middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// add routes
const routeTypes = ['get', 'put', 'post', 'delete', 'use'];
const addRoute = (route) => {
    _(route.controllers || [])
        .map(({type, uri, handler, middleware}) => ({
            uri,
            type: type.toLowerCase(),
            middleware: handler ?
                [...(middleware || []), handler] :
                (middleware || [])
        }))
        .filter(({type}) =>
            routeTypes.indexOf(type) > -1
        )
        .forEach(({type, uri, middleware}) => {
            const fullUri = `/${route.route}/${uri || ''}`;
            _.forEach(middleware,(handler) =>
                app[type](fullUri, handler)
            );
            console.log(`${type.toUpperCase()}: ${fullUri}`);
        });
};
console.log('Adding routes...');
_.forEach(routes, addRoute);
app.use(express.static('public'));

app.listen(port, () => console.log(`Listening on port ${port}`));
