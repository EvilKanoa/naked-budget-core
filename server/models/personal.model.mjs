import mongoose from 'mongoose';

const PersonalSchema = new mongoose.Schema({
    budget: {
        type: [{ month: Number, data: String }],
        default: []
    },
    monthly: {
        type: [{ month: Number, data: String }],
        default: []
    },
    transactions: {
        type: [{
            date: Date,
            categoryId: Number,
            payee: String,
            note: String,
            inflow: Number,
            outflow: Number
        }],
        default: []
    }
});

export { PersonalSchema };
