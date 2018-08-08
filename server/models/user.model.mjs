import mongoose from 'mongoose';
import _ from 'lodash';

import { AuthSchema } from './auth.model';
import { PersonalSchema } from './personal.model';

const UserSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.ObjectId,
        auto: true
    },
    email: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    auth: {
        type: AuthSchema,
        required: true
    },
    personal: {
        type: PersonalSchema,
        required: true,
        default: PersonalSchema
    }
});

UserSchema.methods.toWeb = function() {
    const json = this.toJSON();

    return {
        id: this._id,
        ...(_(json).pick('email', 'personal').omitDeep('_id').value())
    };
};

const model = mongoose.model('user', UserSchema);

export { model as default, UserSchema };
