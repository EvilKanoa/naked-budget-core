import { response } from '../utils';

export default {
    get: async (req, res) => response(res, req.user.toWeb())
};
