import { Schema } from 'mongoose';
import AuthSchema from './auth';
import PersonalSchema from './personal';

const UserSchema = new Schema({
    _id: Schema.ObjectId,
    email: String,
    auth: AuthSchema,
    personal: PersonalSchema
});

export default UserSchema;
