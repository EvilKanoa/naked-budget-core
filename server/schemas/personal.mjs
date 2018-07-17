import mongoose, { Schema } from 'mongoose';

const PersonalSchema = new Schema({
    budget: [{ month: Number, data: String }],
    monthly: [{ month: Number, data: String }],
    transactions: [{
        date: Date,
        categoryId: Number,
        payee: String,
        note: String,
        inflow: Number,
        outflow: Number
    }]
});

const model = mongoose.model('personal', PersonalSchema);

export { model as default, PersonalSchema };
