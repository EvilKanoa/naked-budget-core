import jwt from 'jsonwebtoken';

import { response, to } from '../utils';
import config from '../config';
import User from '../models/user.model';

export default {
    login: async (req, res) => {
        if (!req.user) {
            return response(res, 'User not authenticated', false, 401);
        }

        const token = jwt.sign(
            {id: req.user._id},
            config.auth.jwtSecret,
            {expiresIn: config.auth.jwtExpiration}
         );
        return response(res, {token})
    },
    register: async (req, res) => {
        const userInfo = {
            email: req.body.email,
            auth: {
                password: req.body.password
            }
        };

        const [err, user] = await to(User.create(userInfo));
        if (err) {
            return response(res, 'A user already exists with that email', false, 409);
        } else {
            return response(res, user.toWeb(), true, 201);
        }
    }
};
