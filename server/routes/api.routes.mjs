import passport from 'passport';

import { response } from '../utils';
import UserController from '../controllers/user.controller';

export default {
    route: 'api',
    controllers: [
        {
            type: 'get',
            handler: (req, res) => response(res, 'Welcome to the NakedBudget JSON API!')
        },
        {
            type: 'get',
            uri: 'users',
            middleware: passport.authenticate('jwt', {session: false}),
            handler: UserController.get
        }
    ]
};
