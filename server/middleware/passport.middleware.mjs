import LocalStrategy from 'passport-local';
import PassportJWT from 'passport-jwt';

import { to } from '../utils';
import config from '../config';
import User from '../models/user.model';
import { fakeComparePassword } from '../models/auth.model';

export default [
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, async (email, password, done) => {
        if (!email || !password) {
            return done(null, false, {messages: 'Email and password are required'})
        }

        let auth;
        let [err, user] = await to(User.findOne({email}));
        if (user && !err) {
            [err, auth] = await to(user.auth.comparePassword(password));
        } else {
            [err, auth] = await to(fakeComparePassword(password));
        }

        if (err) {
            return done(null, false, {message: err});
        } else if (auth) {
            return done(null, user, {message: 'Logged in'});
        } else {
            return done(null, false, {message: 'Internal error'});
        }
    }),
    new PassportJWT.Strategy({
        secretOrKey: config.auth.jwtSecret,
        jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken()
    }, async (jwtPayload, done) => {
        if (!jwtPayload) {
            return done(null, false, {message: 'Internal error'});
        }

        const [err, user] = await to(User.findById(jwtPayload.id));

        if (err) {
            return done(err, false);
        } else {
            return done(null, user);
        }
    })
];
