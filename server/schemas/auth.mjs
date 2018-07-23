import mongoose, { Schema } from 'mongoose';

const AuthSchema = new Schema({
    _id: Schema.ObjectId,
    hash: String,
    salt: String,
    providers: [{name: String, id: String}]
});

const model = mongoose.model('auth', AuthSchema);

export { model as default, AuthSchema };
