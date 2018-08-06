import passport from 'passport';

import AuthController from '../controllers/auth.controller';

export default {
    route: 'auth',
    controllers: [
        {
            type: 'post',
            uri: 'login',
            middleware: passport.authenticate('local', {session: false}),
            handler: AuthController.login
        },
        {
            type: 'post',
            uri: 'register',
            handler: AuthController.register
        }
    ]
};
