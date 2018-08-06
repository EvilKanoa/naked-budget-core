import { Schema } from 'mongoose';

const AuthSchema = new Schema({
    _id: Schema.ObjectId,
    hash: String,
    salt: String,
    providers: [{name: String, id: String}]
});

export default AuthSchema;
