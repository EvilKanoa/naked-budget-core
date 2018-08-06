import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

import { to } from '../utils';
import config from '../config';

const AuthSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true
    },
    providers: {
        type: [{
            name: {
                type: String,
                required: true
            },
            id: {
                type: String,
                required: true
            }
        }],
        default: []
    }
});

AuthSchema.pre('save', async function() {
    if (this.isModified('password') || this.isNew) {
        const [err, hash] = await to(bcrypt.hash(this.password, config.auth.saltRounds));
        if (err) {
            console.log(err);
            throw new Error(err);
        }

        this.password = hash;
    }
});

AuthSchema.methods.comparePassword = async function(password) {
    if (!this.password) {
        throw new Error('Password not set');
    }

    const [err, res] = await to(bcrypt.compare(password, this.password));
    if (err) {
        throw new Error(err);
    }

    if (res === true) {
        return this;
    } else {
        throw new Error('Invalid credentials');
    }
};

const fakeComparePassword = async function(password) {
    const [err] = await to(bcrypt.compare(password, ''));
    if (err) {
        throw new Error(err);
    } else {
        throw new Error('Invalid credentials');
    }
};

export { AuthSchema, fakeComparePassword };
