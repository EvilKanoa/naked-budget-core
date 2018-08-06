import { response } from '../utils';

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
            handler: (req, res) => {
                res.status = 200;
                res.json({msg: 'Users get'})
            }
        }
    ]
};
