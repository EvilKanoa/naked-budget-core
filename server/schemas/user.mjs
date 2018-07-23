import mongoose, { Schema } from 'mongoose';
import { AuthSchema } from './auth';
import { PersonalSchema } from './personal';

const UserSchema = new Schema({
    _id: Schema.ObjectId,
    name: String,
    email: String,
    auth: AuthSchema,
    personal: PersonalSchema
});

const model = mongoose.model('user', UserSchema);

export { model as default, UserSchema };
