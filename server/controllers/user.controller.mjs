import _ from 'lodash';

import { response, to } from '../utils';

export default {
    get: async (req, res) => response(res, req.user.toWeb()),
    set: async (req, res) => {
        const { body } = req;
        let { user } = req;
        let err;

        const cleanData = _.pick(body, 'personal', 'email');
        if (!_.isEqual(body, cleanData)) {
            return response(res, {
                message: 'You do not have permission to modify selected values',
                denied: _.difference(_.keys(body), _.keys(cleanData))
            })
        }

        user.set(cleanData);
        [err, user] = await to(user.save());
        if (err) {
            console.log(err, user, cleanData);

            return response(res, null, false);
        }

        return response(res, user.toWeb());
    }
};
